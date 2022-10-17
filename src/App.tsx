import { FormEvent, useState } from "react";
import { Input } from "./components/Input";
import { Label } from "./components/Label";
import { Button } from "./components/Button";

import extenso from "extenso";

function App() {
    const [emitente, setEmitente] = useState("");
    const [recebemosDe, setRecebemosDe] = useState("");
    const [valor, setValor] = useState<number | undefined>(undefined);
    const [valorExtenso, setValorExtenso] = useState("");

    function sendForm(event: FormEvent) {
        event.preventDefault();

        if (
            emitente.trim() === "" ||
            recebemosDe.trim() === "" ||
            Number(valor) === 0
        ) {
            return alert("Preencha todos os campos");
        }

        window.print();
    }

    function handleValor(v?: string) {
        if (!v) {
            setValor(undefined);
            return;
        }

        const valor = Number(v);

        if (valor > 9999999999999) {
            return valor;
        }
        setValorExtenso(
            valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
        );
        setValor(valor);
    }

    return (
        <div className="w-full h-screen p-2 sm:p-10 print:p-10 items-center flex flex-col gap-4 ">
            <form
                onSubmit={sendForm}
                className="flex flex-col gap-4 border border-gray-300 p-4 sm:p-10 max-w-2xl w-full rounded print:hidden"
            >
                <div className="flex-col sm:flex-row print:flex-row flex">
                    <Label htmlFor="emitente">Quem assina?</Label>
                    <Input
                        id="emitente"
                        value={emitente}
                        onChange={(e) => setEmitente(e.target.value)}
                    />
                </div>

                <div className="flex-col sm:flex-row print:flex-row flex">
                    <Label htmlFor="recebemosDe">Recebi(emos) de:</Label>
                    <Input
                        id="recebemosDe"
                        value={recebemosDe}
                        onChange={(e) => setRecebemosDe(e.target.value)}
                    />
                </div>

                <div className="flex-col sm:flex-row print:flex-row flex">
                    <Label htmlFor="valor">Valor de:</Label>
                    <Input
                        id="valor"
                        type="number"
                        value={valor}
                        onChange={(e) => handleValor(e.target.value)}
                    />
                </div>

                <div className="flex justify-end">
                    <Button type="submit" className="w-full max-w-[200px]">
                        Imprimir
                    </Button>
                </div>
            </form>

            <div
                id="print"
                className="flex flex-col gap-4 border border-gray-300 p-4 sm:p-10 max-w-2xl w-full rounded"
                style={{
                    backgroundImage: "url('/assets/background.svg')",
                    backgroundSize: "100%",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex flex-row justify-between">
                    <h2 className="text-2xl font-black">RECIBO</h2>
                    <span className="text-xl sm:text-3xl print:text-3xl h-10">
                        {valor?.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </span>
                </div>

                <div className="text-lg">
                    <strong>Recebi(emos) de</strong>{" "}
                    <span className="text-xl">{recebemosDe}</span>
                </div>
                <div className="text-lg">
                    <strong>a quantia de </strong>
                    {valorExtenso &&
                        extenso(valorExtenso, {
                            mode: "currency",
                            currency: { type: "BRL" },
                        })}
                </div>
                <div>
                    <strong>e para clareza firmo (amos) o presente.</strong>
                </div>
                <div className="flex justify-end">
                    {new Date(Date.now()).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}
                </div>
                <div className="mt-12 border-t-2 text-center pt-2 font-bold">
                    Assinatura <br />
                    {emitente}
                </div>
            </div>
        </div>
    );
}

export default App;

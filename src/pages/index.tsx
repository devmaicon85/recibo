import { FormEvent, useState } from "react";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Button } from "../components/Button";

import extenso from "extenso";
import { BoxLabelInput } from "../components/BoxLabelInput";

function App() {
    const [emitente, setEmitente] = useState("");
    const [recebemosDe, setRecebemosDe] = useState("");
    const [correspondenteA, setCorrespondenteA] = useState("");
    const [valor, setValor] = useState<number | undefined>(undefined);
    const [valorExtenso, setValorExtenso] = useState("");

    function sendForm(event: FormEvent) {
        event.preventDefault();
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
        <div className="w-full h-screen p-2 sm:p-10 mb-20 print:p-10 items-center flex flex-col gap-4  ">
            <div className="w-full  flex justify-center p-4 sm:p-10 print:hidden">
                <img src="/assets/logo.svg" />
            </div>
            <form
                onSubmit={sendForm}
                className="flex flex-col gap-4 border-gray-300 p-4 sm:p-10 max-w-2xl w-full rounded print:hidden"
            >
                <BoxLabelInput>
                    <Label htmlFor="emitente">Quem assina?</Label>
                    <Input
                        id="emitente"
                        value={emitente}
                        onChange={(e) => setEmitente(e.target.value)}
                    />
                </BoxLabelInput>

                <BoxLabelInput>
                    <Label htmlFor="recebemosDe">Recebi(emos) de:</Label>
                    <Input
                        id="recebemosDe"
                        value={recebemosDe}
                        onChange={(e) => setRecebemosDe(e.target.value)}
                    />
                </BoxLabelInput>

                <BoxLabelInput>
                    <Label htmlFor="valor">Valor de:</Label>
                    <Input
                        id="valor"
                        type="number"
                        step="0.01"
                        value={valor}
                        onChange={(e) => handleValor(e.target.value)}
                    />
                </BoxLabelInput>

                <BoxLabelInput>
                    <Label htmlFor="correspondenteA">referente a:</Label>
                    <Input
                        id="correspondenteA"
                        value={correspondenteA}
                        onChange={(e) => setCorrespondenteA(e.target.value)}
                    />
                </BoxLabelInput>

                <div className="flex justify-end">
                    <Button type="submit" className="w-full max-w-[200px]">
                        Imprimir
                    </Button>
                </div>
            </form>

            <div
                id="print"
                className="flex  flex-col gap-4 border border-primary print:border-gray-800 p-4 print:p-7 sm:p-10 max-w-2xl w-full rounded"
                style={{
                    backgroundImage: "url('/assets/background.svg')",
                    backgroundSize: "100%",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex flex-row justify-between">
                    <h2 className="text-2xl font-black">RECIBO</h2>
                    <span className="text-2xl  font-black h-10 bg-gray-200 px-4 py-1 rounded-xl">
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
                <div className="text-lg">
                    <strong>Correspondente a </strong>{" "}
                    <span className="text-xl">{correspondenteA}</span>
                </div>
                <div>
                    <strong>e para clareza firmo(amos) o presente.</strong>
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

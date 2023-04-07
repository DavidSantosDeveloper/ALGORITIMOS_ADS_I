import { question } from "readline-sync";

function main() {
    // ENTRADA
    const tabela_fipe_referencia = 89.000;
    const valor_modelo_desejado = 185.000;

    const percentual_fipe = Number(question("Percentual da fipe: "))
    const quantidade_meses = Number(question("Parcela em meses (numero): "))
    const taxa_administracao_cdc = Number(question("Taxa da administracao cdc(%): "))
    const taxa_administracao_consorcio = Number(question("Taxa consorcio: "))
        // PROCESSAMENTO
    const valor_bem_cdc = calculaValorBemCdc(percentual_fipe, tabela_fipe_referencia, valor_modelo_desejado);
    const valor_parcelado_cdc = calculaValorParceladoCdc(valor_bem_cdc, quantidade_meses);
    const juro_total_cdc = calculaJuroTotalCdc(valor_bem_cdc, taxa_administracao_cdc);
    const numero_parcelas_cdc = calculaNumeroParcelaCdc(quantidade_meses);
    const total_pagar_cdc = calculaTotalPagarCdc(valor_bem_cdc, juro_total_cdc);

    const valor_bem_consorcio = calculaValorBemConsorcio(percentual_fipe, tabela_fipe_referencia, valor_modelo_desejado);
    const valor_parcelado_consorcio = calculaValorParceladoConsorcio();
    const juro_total_consorcio = calculaJuroTotalConsorcio();
    const numero_parcelas_cosorcio = calculaNumeroParcelaConsorcio();
    const total_pagar_consorcio = calculaTotalPagarConsorcio();

    // SAIDA

}

function calculaValorBemCdc(percentual_fipe, tabela_fipe_referencia, valor_modelo_desejado) {
    const auxiliar = valor_modelo_desejado - ((percentual_fipe / 100) * tabela_fipe_referencia)
    const resultado = auxiliar > 0 ? auxiliar : auxiliar * (-1);
    return resultado;
}

function calculaValorParceladoCdc(valor_bem_cdc, quantidade_meses) {
    return valor_bem_cdc / quantidade_meses;

}

function calculaJuroTotalCdc(valor_bem_cdc, taxa_administracao_cdc) {
    return valor_bem_cdc * (taxa_administracao_cdc / 100)
}

function calculaNumeroParcelaCdc(quantidade_meses) {
    return quantidade_meses;
}

function calculaTotalPagarCdc(valor_bem_cdc, juro_total_cdc) {
    return valor_bem_cdc * (juro_total_cdc / 100);
}

function


main()
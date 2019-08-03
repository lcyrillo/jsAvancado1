class DateHelper
{
    constructor()
    {
        this._validacao = /\d{4}-\d{2}-\d{2}/;
    }

    static textoParaData(texto)
    {
        if(/\d{4}-\d{2}-\d{2}/.test(texto))
        {
            return new Date(
                ...texto
                    .split("-")
                    .map((item, indice) => item - indice % 2)
            );
        }
    }

    static dataParaTexto(data)
    {
        return `${data.getFullYear()}/${data.getMonth()+1}/${data.getDate()}`;
    }
}
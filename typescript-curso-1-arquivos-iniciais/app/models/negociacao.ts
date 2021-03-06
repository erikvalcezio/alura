export class Negociacao{

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number){ }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get date(): Date {        
        return new Date(this._data);
    }

}
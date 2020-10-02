
export default class ListaClass {
    constructor(id, name) {
        this.lista = [];
        this.id = id;
        this.name = name;
    }

    updateLista(checklist){
        this.lista = checklist;
        return this.lista;
    }
}
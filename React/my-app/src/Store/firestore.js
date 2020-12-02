import firebase from '../Services/firebase'


export async function GetListas() {
    const db = firebase.firestore();
    var data = await (await db.collection("Listas").get()).docs;
    return data;

}

export default async function GetLista(listId) {

    const db = firebase.firestore();
    var data = await (await (await db.collection("Listas").doc(listId).collection("Itens").get()).docs);

    var teste = []
    data.map((val) => {
        teste.push(val.data().msg)
    })
    return teste;
}

export async function updateListaDeListas(ListaDeListas) {
    for (let i = 0; i < Object.keys(ListaDeListas).length; i++) {
        var key = Object.keys(ListaDeListas)[i];

    };
}
export async function getItens(ListasDeListas) {
    let oldList = { ...ListasDeListas }
    let databaseList = (await GetListas());

    databaseList.map(async (element) => {
        oldList[element.data().name] = await GetLista(element.id)

    });
    return oldList;
}

export function addOnList(newItem, key, ListasDeListas){
    let newList = {...ListasDeListas};

    let arr = newList[key];
    arr.push(newItem);
    newList[key] = arr;
    return newList;
}
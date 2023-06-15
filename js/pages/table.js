import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";
import { firestoreDataBase } from "../layout/initApp.js";
import Create from "./create.js";
import app from "../index.js";

export default class Table {
    $table
    $createBtn

    constructor() {


    }

    initRender = async (container) => {
        this.$table = `
        <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">index</th>
                <th scope="col">avaUrl</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Weigh</th>
            </tr>
        </thead>
        <tbody>
        ${await this.getData(firestoreDataBase).then(data => data)}
        </tbody>
    </table>
        `;
        console.log(this.$createBtn)
        container.innerHTML += this.$createBtn;
        container.innerHTML += await this.$table;
    }

    // su dung async - await de xu ly bat dong bo -> load du lieu dong thoi trong mot thoi gian -> nhanh hon 
    async getData(firestoreDataBase) {
        let rows = ``;
        const querySnapshot = await getDocs(collection(firestoreDataBase, "products"));
        querySnapshot.forEach((doc) => {

            rows += `<tr>
            <th scope="row">${doc.id}</th>
            <td>
                <img  src="${doc.data().avaUrl}" style="max-height:100px;" alt ="">
            </td>
            <td>${doc.data().name}</td>
            <td>${doc.data().price}</td>
            <td>${doc.data().size} ${doc.data().unit}</td>
        </tr>`;

        });
        return rows;
    }

    gotoCreate = () => {
        const create = new Create();
        app.changeActiveScreen(create);
    }
}
// const db = getFirestore(firebaseProject);

document.title = "Table";
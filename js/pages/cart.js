import { getFirestore, collection, getDocs, addDoc, getDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";
import { firestoreDataBase } from "../layout/initApp.js";
import Create from "./create.js";
import app from "../index.js";

export default class Cart {
    $table
    tbody

    constructor() {
        this.$table = document.createElement("table");
        this.$table.classList.add("table");
        this.$table.classList.add("table-hover");

        const header = `<thead>
        <tr>
            <th scope="col">index</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
        </tr>
        </thead>`;
        this.$table.innerHTML += header;


        this.tbody = document.createElement("tbody");

        this.$table.appendChild(this.tbody);
    }

    initRender = async (container) => {
        await this.getData(firestoreDataBase);
        container.appendChild(this.$table);
    }

    // su dung async - await de xu ly bat dong bo -> load du lieu dong thoi trong mot thoi gian -> nhanh hon 
    async getData(firestoreDataBase) {
        const querySnapshot = await getDocs(collection(firestoreDataBase, "card"));

        querySnapshot.forEach((doc) => {
            let row = document.createElement("tr");

            let cellIndex = document.createElement("th");
            cellIndex.scope = "row";

            let cellQuantity = document.createElement("td");

            let cellTotal = document.createElement("td");

            let cellDelete = document.createElement("td");
            let btnDel = document.createElement("button");
            btnDel.style.outline = "none";
            btnDel.style.background = "none";
            btnDel.style.border = "none";
            btnDel.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
            cellDelete.appendChild(btnDel);

            cellIndex.innerHTML = doc.data().product;
            cellQuantity.innerHTML = doc.data().quantity;
            cellTotal.innerHTML = 0;
            btnDel.addEventListener("click", () => {
                this.deleteItem(doc.id).then(rs => rs);
            });

            row.appendChild(cellIndex);
            row.appendChild(cellQuantity);
            row.appendChild(cellTotal);
            row.appendChild(cellDelete);

            this.tbody.appendChild(row);
        });
    }

    gotoCreate = () => {
        const create = new Create();
        app.changeActiveScreen(create);
    }

    async deleteItem(id) {
        await deleteDoc(doc(firestoreDataBase, "card", id));
        location.reload();
    }
}
document.title = "Cart";
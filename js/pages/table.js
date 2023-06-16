import { getFirestore, collection, getDocs, addDoc, getDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";
import { firestoreDataBase } from "../layout/initApp.js";
import Create from "./create.js";
import app from "../index.js";

export default class Table {
    $table
    tbody

    constructor() {
        this.$table = document.createElement("table");
        this.$table.classList.add("table");
        this.$table.classList.add("table-hover");

        const header = `<thead>
        <tr>
            <th scope="col">index</th>
            <th scope="col">avaUrl</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Weigh</th>
            <th scope="col"></th>
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
        const querySnapshot = await getDocs(collection(firestoreDataBase, "products"));

        querySnapshot.forEach((doc) => {
            let row = document.createElement("tr");

            let cellIndex = document.createElement("th");
            cellIndex.scope = "row";

            let cellAvaUrl = document.createElement("td");
            let img = document.createElement("img");
            img.style.maxHeight = "100px";
            cellAvaUrl.appendChild(img);

            let cellName = document.createElement("td");

            let cellPrice = document.createElement("td");

            let cellWeigh = document.createElement("td");

            let cellAdd = document.createElement("td");
            let btnAdd = document.createElement("button");
            btnAdd.style.outline = "none";
            btnAdd.style.background = "none";
            btnAdd.style.border = "none";
            btnAdd.innerHTML = `<span class="material-symbols-outlined">add</span>`;
            cellAdd.appendChild(btnAdd);

            let cellDelete = document.createElement("td");
            let btnDel = document.createElement("button");
            btnDel.style.outline = "none";
            btnDel.style.background = "none";
            btnDel.style.border = "none";
            btnDel.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
            cellDelete.appendChild(btnDel);

            cellIndex.innerHTML = doc.id;
            img.src = doc.data().avaUrl;
            cellName.innerHTML = doc.data().name;
            cellPrice.innerHTML = doc.data().price;
            cellWeigh.innerHTML = doc.data().size + " " + doc.data().unit;
            btnAdd.addEventListener("click", () => {
                this.addCart(doc.id)
            });
            btnDel.addEventListener("click", () => {
                this.deleteItem(doc.id).then(rs => rs);
            });

            row.appendChild(cellIndex);
            row.appendChild(cellAvaUrl);
            row.appendChild(cellName);
            row.appendChild(cellPrice);
            row.appendChild(cellWeigh);
            row.appendChild(cellDelete);
            row.appendChild(cellAdd);

            this.tbody.appendChild(row);
        });
    }

    gotoCreate = () => {
        const create = new Create();
        app.changeActiveScreen(create);
    }

    async addCart(id) {
        try {
            const prd = doc(firestoreDataBase, "products", id);
            const check = await getDoc(prd);

            if (check.exists()) {
                const docRef = await addDoc(collection(firestoreDataBase, "cart"), {
                    productId: id,
                    quantity: 1
                });
                alert("Add to cart successfully");
            } else {
                // docSnap.data() will be undefined in this case
                alert("No such document!");
            }
        } catch (e) {
            alert("Error adding document: ", e);
        }
    }

    async deleteItem(id) {
        await deleteDoc(doc(firestoreDataBase, "products", id));
        location.reload();
    }
}

document.title = "Table";
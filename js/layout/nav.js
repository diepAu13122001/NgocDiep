class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="../index.html">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../NgocDiep/html/table.html">Table - Firestore</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Map - API</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Blogger - API</a>
          </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Login - Firebase Auth</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
  }
}

customElements.define('header-component', Header);

function gotoCreate() {
  window.location.href = "../html/create.html";
}
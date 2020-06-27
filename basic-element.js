
import { LitElement, html, css } from 'lit-element';

class BasicElement extends LitElement {

  static get properties() {
    return {
      name: { type: String },
      age: {type: Number },
      salary: { type: String },
      country: { type: String },
      employee: { type: Boolean },
      description: { type: String },
      title: {type: String},
      panelType : {type: String}
    };
  }

  constructor() {
    super();

    // default values can be set from the constructor
    this.name = "Nombre";
    this.age = 18;
    this.salary = "Sueldo";
    this.country = "Spain";
    this.employee = false;
    this.description = "Descripción";
    this.title = "My card";
    this.panelType = "primary"
  }

  createRenderRoot() {
    return this;
  }
  render(){
    return html`
        <div class="card">
          <h4 class="card-header bg-${this.panelType} text-white ">${this.title}</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${this.name}</li>
              <li class="list-group-item">Age: ${this.age}</li>
              <li class="list-group-item">Salary: ${this.salary}</li>
              <li class="list-group-item">Employee: ${this.employee}</li>
              <li class="list-group-item">Description: ${this.description}</li>
            </ul>
        </div>
    `;
  }
}

customElements.define('basic-element', BasicElement);

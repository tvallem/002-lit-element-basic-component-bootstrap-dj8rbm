
import { LitElement, html, css } from 'lit-element';

class BasicElement extends LitElement {

  static get properties() {
    return {
      name: { type: String },
      firstName: { type: String },
      age: {type: Number },
      salary: { type: String },
      country: { type: String },
      employee: { type: Boolean },
      description: { type: String }
    };
  }

  createRenderRoot() {
    return this;
  }
  render(){
    return html`
        <div class="card">
          <h4 class="card-header bg-primary text-white ">Basic component by y</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">name: ${this.name2}</li>
            </ul>
        </div>
    `;
  }
}

customElements.define('basic-element', BasicElement);

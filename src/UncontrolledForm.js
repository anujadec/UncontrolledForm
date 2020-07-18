import React from "react";

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    const messageTemplate = `
    First Name: ${this.firstName.value}
    Last Name: ${this.lastName.value}
    Email: ${this.email.value}
    Phone: ${this.phone.value}
    `;
    alert(messageTemplate);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-row">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            ref={input => (this.firstName = input)}
          />
        </div>

        <div class="form-row">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            ref={input => (this.lastName = input)}
          />
        </div>

        <div class="form-row">
          <label>Email</label>
          <input
            type="email"
            name="email"
            ref={input => (this.email = input)}
          />
        </div>

        <div class="form-row">
          <label>Phone Number</label>
          <input type="text" name="phone" ref={input => (this.phone = input)} />
        </div>

        <div class="form-row">
          <button type="submit" class="btn">
            submit
          </button>
        </div>
      </form>
    );
  }
}

export default UncontrolledForm;

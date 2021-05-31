import React, { PureComponent } from 'react';

export default class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    console.log('habitAddForm');
    return (
      <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type='text'
          className='add-input'
          placeholder='Add your habit'
        />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

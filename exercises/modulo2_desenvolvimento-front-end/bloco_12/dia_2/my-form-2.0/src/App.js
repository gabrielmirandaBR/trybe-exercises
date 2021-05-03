import React, { Component } from 'react';
import './App.css';
import Nome from './components/Nome';
import Email from './components/Email'
import CPF from './components/CPF';
import Endereco from './components/Endereco';
import Cidade from './components/Cidade';
import Estado from './components/Estado';
import Moradia from './components/Moradia';
import Resumo from './components/Resumo';
import Descricao from './components/Descricao';
import MontaCurriculo from './components/MontaCurriculo';
import LimpaCurriculo from './components/LimpaCurriculo';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);
    this.handleClickErase = this.handleClickErase.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      moradia: 'false',
      resumoCurriculo: '',
      descricaoCargo: '',
      descricaoAlert: 'false',
      montaCurriculo: 'false',
    }
  }

  handleChange({ target }) {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value
    
    this.setState({
      [name]: value,
    });
  }

  handleBlur({ target }) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const { value } = target;
    numbers.forEach(number => {

      if (number === value[0]) {
        this.setState({
          cidade: '',
        });
      }
    });
  }

  handleMouseEnter() {
    const { descricaoAlert } = this.state
    if (descricaoAlert === 'false') {
      alert('Preencha com cuidado esta informação.');
    }

    this.setState({
      descricaoAlert: true,
    });
  }

  handleClickCreate(event) {
    event.preventDefault();
    this.setState({
      montaCurriculo: true,
    });
    
    if (this.state.montaCurriculo === 'false') {
      const sectionCurriculo = document.querySelector('.curriculo');
      const stateValues = Object.values(this.state);
      const stateKeys = Object.keys(this.state);

      const title = document.createElement('h2');
      title.innerHTML = 'Dados do Currículo';
      sectionCurriculo.appendChild(title);
      
      stateValues.forEach((value, index) => {
        const p = document.createElement('p');
        p.innerHTML = `${stateKeys[index]}: ${value}`;
        sectionCurriculo.appendChild(p);
      });
    }
  }

  handleClickErase(event) {
    event.preventDefault();
    this.setState({
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      moradia: 'false',
      resumoCurriculo: '',
      descricaoCargo: '',
      descricaoAlert: 'false',
      montaCurriculo: 'false',
    });

    document.querySelector('.curriculo').innerHTML = '';
  }
  
  render() {
    return (
      <main>
        <form className="App">
          <fieldset className="personal-contents">
            <h2>Dados Iniciais</h2>
            <Nome value={ this.state.name } handleChange={ this.handleChange }/>
            <Email value={ this.state.email } handleChange={ this.handleChange }/>
            <CPF value={ this.state.cpf } handleChange={ this.handleChange }/>
            <Endereco value={ this.state.endereco } handleChange={ this.handleChange }/>
            <Cidade value={ this.state.cidade } handleChange={ this.handleChange } handleBlur={ this.handleBlur }/>
            <Estado value={ this.state.estado } handleChange={ this.handleChange }/>
            <Moradia check={ this.state.moradia } handleChange={ this.handleChange }/>
          </fieldset>
        </form>

          <fieldset className="professional-contents">
            <h2>Dados profissionais</h2>
            <Resumo value={ this.state.resumoCurriculo } handleChange={ this.handleChange }/>
            <Descricao value={ this.state.descricaoCargo } alert={ this.state.descricaoAlert } handleChange={ this.handleChange } handleMouseEnter={ this.handleMouseEnter }/>
          </fieldset>

        <section className="btn-section">
          <MontaCurriculo handleClickCreate={ this.handleClickCreate }/>
          <LimpaCurriculo handleClickErase={ this.handleClickErase }/>
        </section>

        <section className='curriculo'></section>
      </main>
    );
  }
}

export default App;

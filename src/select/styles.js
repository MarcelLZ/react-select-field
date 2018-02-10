import styled from 'styled-components'

export default styled.div`
  .select {
    width: 100%;
    position: relative;
    margin-top: 16px;
  }

  .select-text {
    position: relative;
    font-family: inherit;
    background-color: transparent;
    width: 100%;
    padding: 10px 10px 10px 0;
    font-size: 18px;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid rgba(0,0,0, 0.12);
  }

  .select-text:focus {
    outline: none;
    border-bottom: 1px solid rgba(0,0,0, 0);
  }

  .select .select-text {
    appearance: none;
    -webkit-appearance:none
  }

  .select:after {
    position: absolute;
    top: 18px;
    right: 10px;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.12);
    pointer-events: none;
  }

  .select-label {
    color: rgba(0,0,0, 0.26);
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 10px;
    transition: 0.2s ease all;
  }

  .select-text:focus ~ .select-label, .select-text:valid ~ .select-label {
    color: rgb(63,81,181);
    top: -10px;
    transition: 0.2s ease all;
    font-size: 14px;
  }

  .select-bar {
    position: relative;
    display: block;
    width: 100%;
  }

  .select-bar:before, .select-bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #2F80ED;
    transition: 0.2s ease all;
  }

  .select-bar:before {
    left: 50%;
  }

  .select-bar:after {
    right: 50%;
  }

  .select-text:focus ~ .select-bar:before, .select-text:focus ~ .select-bar:after {
    width: 50%;
  }

  .select-highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  .select-error {
    margin: 2px;
    color: #FF0000;
    font-size: 12px
  }

  .has-error > .select-bar:before, .has-error > .select-bar:after {
    background: #FF0000;
    width: 50%;
  }

  .has-error > .select-label {
    color: #FF0000;
  }
`

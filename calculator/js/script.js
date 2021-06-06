class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.currentOperandTextElement.innerText = 'Hello!';
    this.readyToReset = false;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
    this.readyToReset = false;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  showZero() {
    this.currentOperandTextElement.innerText = '0';
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.currentOperand !== '' && this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  squareRoot() {
    this.previousOperand = this.currentOperand;
    this.currentOperand = Math.sqrt(this.currentOperand);
    this.readyToReset = true;

  }

  negativeNumber(number) {
    this.currentOperand = this.currentOperand * (-1);
  }

  getNumberOfDecimal() {
    if (this.previousOperand.toString().includes('.') || this.currentOperand.toString().includes('.')) {
      let prevLength = this.previousOperand.toString().split('.').pop().length;
      let currentLength = this.currentOperand.toString().split('.').pop().length;
      let result = Math.max(prevLength, currentLength);
      return result;
    }
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = Number((prev + current).toFixed(calculator.getNumberOfDecimal()));
        break
      case '-':
        computation = Number((prev - current).toFixed(calculator.getNumberOfDecimal()));
        break
      case '*':
        computation = Number((prev * current).toFixed(9));
        break
      case '÷':
        computation = Number((prev / current).toFixed(9));
        break
      case '^':
        computation = Math.pow(prev, current);
        break
      default:
        return;
    }
    this.readyToReset = true;
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('ru', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const sqrtButton = document.querySelector('[data-sqrt]');
const negativeButton = document.querySelector('[data-negative]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener("click", () => {

    if (calculator.previousOperand === "" &&
      calculator.currentOperand !== "" &&
      calculator.readyToReset) {
      calculator.currentOperand = "";
      calculator.readyToReset = false;
    }
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay();
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
})

equalsButton.addEventListener('click', button => {
  if (calculator.previousOperand === "") {
    calculator.compute();
    calculator.updateDisplay();
    calculator.clear();
  } else {
    calculator.compute();
    calculator.updateDisplay();
  }
})

allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
  calculator.showZero();
})

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
})

sqrtButton.addEventListener('click', button => {
  if (calculator.currentOperand < 0) {
    calculator.currentOperandTextElement.innerText = 'error';
    calculator.clear();
  } else {
    calculator.squareRoot();
    calculator.updateDisplay();
    calculator.previousOperandTextElement.innerText = '√' + calculator.previousOperand;
  }
})

negativeButton.addEventListener('click', button => {
  calculator.negativeNumber();
  calculator.updateDisplay();
})
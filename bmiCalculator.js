import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height='';
    weight='';
    bmiValue='';
    result='';

    handleCalculate(event){
        event.preventDefault();
        this.calculateBMI();
        this.result = this.getResult();
    }

    calculateBMI(){
        //BMI = weight in KG / (height in m * height in m)
        let height = Number(this.height)/100;
        let bmi = Number(this.weight) / (height*height);
        this.bmiValue = Number(bmi.toFixed(2));
    }

    getResult(){
        if(this.bmiValue < 18.5){
            return "Underweight";
        } else if(this.bmiValue >= 18.5 && this.bmiValue < 25){
            return "Healthy";
        } else if(this.bmiValue >= 25 && this.bmiValue < 30){
            return "Overweight";
        } else {
            return "Obese";
        }
    }

    handleInput(event){
        const {name, value} = event.target;
        console.log('name : ',name);
        console.log('value : ',value);

        if(name === 'height'){
            this.height = value;
        }
        if(name === 'weight'){
            this.weight = value;
        }
    }

    handleRecalculate(){
        this.height='';
        this.weight='';
        this.bmiValue='';
        this.result='';
    }
}
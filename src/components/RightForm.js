import React from "react";
import "./RightForm.css";

class RightForm extends React.Component {
  
	render() {
	  return (
		<CurrencyConverter/>
	  )  
	}  
  }
  
  class CurrencyConverter extends React.Component {
	constructor() {
	  super();
	  
	  this.state = {
		baseCurrency:'GBP',
		convertToCurrency:'USD',
		baseAmount: 100,
		rates: [],
		currencies: []
	  };
	  
	  this.changeBaseCurrency = this.changeBaseCurrency.bind(this);
	  this.changeConvertToCurrency = this.changeConvertToCurrency.bind(this);
	  this.changeBaseAmount = this.changeBaseAmount.bind(this);
	  this.getConvertedCurrency = this.getConvertedCurrency.bind(this);
	  this.callAPI = this.callAPI.bind(this);
	}
	
	componentDidMount() {
	 this.callAPI(this.state.baseCurrency)
	}
	
	changeBaseCurrency(e) {
	  this.setState({ baseCurrency: e.target.value});
	  this.callAPI(e.target.value)
	  
	}
	
   callAPI(base) {
	 const api = `https://api.exchangeratesapi.io/latest?base=${base}`;
	  
	  fetch(api)
	   .then(results => {
		  return results.json();
	  }).then(data => this.setState({
		rates: data['rates'],
		currencies: Object.keys(data['rates']).sort()
	  }));
	 
   } 
	
	
	changeConvertToCurrency(e) {
	  this.setState({
		convertToCurrency: e.target.value
	  });
	}
	
	changeBaseAmount(e) {
	 this.setState({
	   baseAmount: e.target.value
	 });
	}
	
	getConvertedCurrency(baseAmount,convertToCurrency,rates) {
		return Number.parseFloat(baseAmount * rates[convertToCurrency]).toFixed(3);
	}
	
	render() {
	  const {currencies,rates,baseCurrency,baseAmount,convertToCurrency} = this.state;
	  
	  const currencyChoice = currencies.map(currency =>
		<option key={currency} value={currency}> {currency} </option>      
	  );
											
	  const result = this.getConvertedCurrency(baseAmount, convertToCurrency, rates);
	  
	  
	  return(
		<div className="form-container">
			<p className="heading">Currency Converter</p>
			<div className="left-side">
		  <form>
			<div className="amt">
				<p className="label">Amount</p>
				<input type='number' 
						id='base-amount' 
						defaultValue={baseAmount} 
						onChange={this.changeBaseAmount} className="amt-input">
				</input> 
			</div>

			<div className="from">
				<p className="label">From</p>
				<select  value={baseCurrency} onChange={this.changeBaseCurrency}>
				{currencyChoice}
				<option>{baseCurrency}</option>
				</select>
			</div>
		  
		    <div className="to">
				<p>To</p>
				<select value={convertToCurrency} onChange={this.changeConvertToCurrency}>
				{currencyChoice}
				</select>
			</div>                               
		 </form>  
		 </div>
		 <div className="right-side">
		 	<h2 id='result-text'>{baseAmount} {baseCurrency} is equal to {result} {convertToCurrency}</h2>
		</div>                     
		 
	   </div>
	  );
	}
  }
  

export default RightForm;
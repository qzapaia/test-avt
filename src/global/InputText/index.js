import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import {get} from 'lodash';
import Autosuggest from 'react-autosuggest';
import {Label} from './styled';

const childrenToOpions = children => {
  return children.map(c=>({
    value:c.props.value,
    label:c.props.children
  }))
}

const getSuggestionsFromChildren = children => (value='') => {
  const options = childrenToOpions(children)

  const inputValue = value.trim().toLowerCase();

  return inputValue.length === 0 ? [] : options.filter(o =>
    o.label.toLowerCase().search(inputValue) > -1
  );
};

const getSuggestionValue = suggestion => suggestion.value;

const renderSuggestion = suggestion => (
  <div>
    <button>
      {suggestion.label}
    </button>
  </div>
);


class InputText extends Component {
  constructor() {
    super();
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.onChangeInternal = this.onChangeInternal.bind(this);

    this.state = {
      suggestions: [],
      internalValue:''
    };
  }

  onSuggestionsFetchRequested({value}){
    this.setState({
      suggestions: getSuggestionsFromChildren(this.props.children)(value)
    });
  }

  onSuggestionsClearRequested(){
    this.setState({
      suggestions: []
    });
  }

  onChangeInternal(newValue){
    this.setState({
      internalValue: newValue
    })
  }

  onSuggestionSelected(event, { suggestionValue }){
    this.props.onChange(suggestionValue);
    this.onChangeInternal('')
  }

  render() {
    const {
      suggestions,
      internalValue } = this.state;
    const { onType } = this;
    const {
      onChange,
      value,
      label,
      requiresExistingValue,
      icon,
      placeholder,
      children,
      disabled
    } = this.props;

    const options = childrenToOpions(children);
    const valueExists = options.find(o=>o.value==value) || false;

    const showValue = internalValue || (valueExists ? valueExists.label : value);

    const inputProps = {
      disabled,
      placeholder,
      value: showValue,
      onChange:(event, { newValue }) => {
        this.onChangeInternal(newValue);
        if(!requiresExistingValue){
          onChange(newValue);
        }
      },
      onBlur: () => {
        const valueExists = options.find(o=>o.value==internalValue);
        if(requiresExistingValue && valueExists){
          onChange(internalValue)
        }else if(requiresExistingValue && !valueExists){
          this.onChangeInternal('');
        }else if(internalValue){
          onChange(internalValue);
        }
      }
    };

    return (
      <Label>
        {label && <span>{label}</span>}
        {icon && <Icon id={icon} />}
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </Label>
    );
  }
}

InputText.propTypes = {
  onChange:PropTypes.func,
  value:PropTypes.string,
  label:PropTypes.string,
  placeholder:PropTypes.string,

  requiresExistingValue:PropTypes.bool,

  icon:PropTypes.node,
}

InputText.defaultProps = {
  value:'',
  requiresExistingValue:false,
  children:[]
}

export default InputText;

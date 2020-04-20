import React from 'react';
import Autosuggest from 'react-autosuggest';
import './QuickSearch.scss';
import _ from 'lodash';
import { SearchOutlined, LoadingOutlined } from '@ant-design/icons';
import { ISuggestion } from '.';

/**
 * Performs the search
 *
 * @visibleName Quick Serach
 */
interface IProps {
  isQsLoading?: boolean;
  qsValue: string;
  qsSuggestions: any[];
  qsPlaceholder?: string;
  onQsChange: (event: any, value: any) => void;
  onSuggestionsFetchRequested: (value: any) => void;
  onSuggestionsClearRequested: () => void;
  onSuggestionSelected: (event: any, suggestion: any) => void;
}

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion:ISuggestion) => suggestion.result;
 
// Use your imagination to render suggestions.
const renderSuggestion = (suggestion:ISuggestion) => (
  <div className="suggestionBox">
    {suggestion.result}
  </div>
);

const QuickSearch: React.FC<IProps> = (props: IProps) => {
 const inputProps = {
  placeholder: props.qsPlaceholder ? props.qsPlaceholder : 'Quick Search',
  value: props.qsValue,
  onChange: props.onQsChange
};

 return (
  <div className="quick-serach">
    <Autosuggest
      suggestions={props.qsSuggestions || []}
      onSuggestionsFetchRequested={props.onSuggestionsFetchRequested}
      onSuggestionsClearRequested={props.onSuggestionsClearRequested}
      onSuggestionSelected={props.onSuggestionSelected}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
    <div className="searchbox-icon">
      {false ? (<LoadingOutlined />) : (<SearchOutlined />)}
    </div>
  </div>
  );
};

export default QuickSearch;

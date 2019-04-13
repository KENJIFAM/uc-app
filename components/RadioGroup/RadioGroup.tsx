import React from 'react';
import styles from './styles';

interface IProps {
  name: string;
  options: string[];
  checked: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({ name, options, checked, onChange }: IProps) => {
  const radioList = () => {
    return options.map((option, i) => (
      <label key={i}>
        <input
          type="radio"
          name={name}
          value={option}
          checked={option === checked}
          onChange={onChange}
        />
        <span>{option}</span>
      </label>
    ));
  };

  return (
    <div>
      <style jsx>{styles}</style>
      <form>
        {radioList()}
      </form>
    </div>
  );
};

export default RadioGroup;
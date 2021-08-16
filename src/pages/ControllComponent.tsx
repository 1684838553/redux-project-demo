import React, { useState, useRef } from 'react';
import { Input, Card, Button } from 'antd';

const InputWrapper = (): JSX.Element => {
  const inputRef = useRef<any>();
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');

  const handleClick = () => {
    console.log(inputRef);
    setValue1(inputRef.current?.state.value);
  };

  return (
    <>
      <Card title="受控组件">
        <Input
          placeholder="受控组件"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ marginBottom: '24px', width: 500 }}
        />
        <div>{`受控组件的值(通过onChange获取)：${value}`}</div>
      </Card>
      <Card title="非受控组件" style={{ marginTop: '24px' }}>
        <Input
          placeholder="非受控组件"
          style={{ marginBottom: '24px', width: 500 }}
          ref={inputRef}
        />
        <Button onClick={handleClick}>点击</Button>
        <div>{`非受控组件的值(通过ref获取)：${value1}`}</div>
      </Card>
    </>
  );
};

export default InputWrapper;

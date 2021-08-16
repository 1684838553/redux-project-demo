import React, { useState, useRef, useEffect } from 'react';
import { Input, Button, Space, List } from 'antd';
import { RedoOutlined } from '@ant-design/icons';
import store from './store';
import './mock/testMock';
import {
  getDeleteItem,
  getInputChangeValue,
  getTodoList,
  changeValue,
  addList,
  getWordsList,
  selectWord,
} from './store/actionCreators';
export default function TodoList(): React.ReactNode {
  const inputRef = useRef<any>();
  const [list, setList] = useState<any>(store.getState().list);
  const [value, setValue] = useState<any>(store.getState().value);
  const [wordsList, setWordsList] = useState<any>(store.getState().words);

  useEffect(() => {
    // axios.get('test/list').then((res) => {
    //   console.log(res.data, 'oopp');
    //   const action = getInitTodolist(res.data.list);
    //   store.dispatch(action);
    // });
    const action = getTodoList();
    //store只能接受对象，如果是一个函数，就会执行，返回一个函数
    store.dispatch(action);
  }, []);

  const getChangeData = () => {
    setList(store.getState().list);
    setValue(store.getState().value);
    setWordsList(store.getState().words);
  };
  store.subscribe(getChangeData);

  const submit = () => {
    const value = inputRef.current?.state.value;
    const action = getInputChangeValue(value);
    store.dispatch(action);
  };

  const handleItemDelete = (index) => {
    const action = getDeleteItem(index);
    store.dispatch(action);
  };

  const onChange = (e) => {
    const action = changeValue(e.target.valueue);
    store.dispatch(action);
  };

  const loadmore = () => {
    const action = addList();
    store.dispatch(action);
  };

  const onfocus = () => {
    const action = getWordsList();
    store.dispatch(action);
  };

  const selectTag = (value) => {
    const action = selectWord(value);
    store.dispatch(action);
  };

  const reloadWords = () => {
    onfocus();
  };

  return (
    <div className="page">
      <Space style={{ marginBottom: '24px' }}>
        <Input
          placeholder="todo info"
          width={400}
          ref={inputRef}
          value={value}
          onChange={onChange}
          onFocus={onfocus}
        />
        <Button type="primary" onClick={submit}>
          提交
        </Button>
      </Space>

      <div style={{ marginBottom: '24px' }}>
        {wordsList?.map((item: string, index: number) => {
          return (
            <Button
              key={item}
              style={{ marginRight: '10px', marginBottom: '10px' }}
              onClick={() => selectTag({ item, index })}
            >
              {item}
            </Button>
          );
        })}
        {wordsList.length > 0 ? <RedoOutlined onClick={reloadWords} /> : null}
      </div>

      <List
        bordered
        dataSource={list}
        renderItem={(item: any, index) => (
          <List.Item onClick={() => handleItemDelete(index)}>{item}</List.Item>
        )}
      />
      <Button type="dashed" block onClick={loadmore}>
        加载更多
      </Button>
    </div>
  );
}

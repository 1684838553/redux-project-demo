import Mock from 'mockjs';

export default Mock.mock('test/list', 'get', {
  'list|6': ['@cword(3,10)'],
  'data|10': ['@cword(3,10)'],
});

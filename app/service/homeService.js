const service = require('egg').Service;

class homeService extends service {
  async homeSer() {

    return {
      code: 0, data: [{ 'title': ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy sead euismod dolore tincidunt ut laoreet dolore dolor sit amet', 'time': '2019-04-22 13:59:01', 'local': 'Bob Robson', 'font': '原', 'label': '#USA', 'label1': '#涉枪' },
        { 'title': ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy sead euismod dolore tincidunt ut laoreet dolore dolor sit amet', 'time': '2019-04-22 13:59:01', 'local': 'Bob Robson', 'font': '原', 'label': '#USA', 'label1': '#涉枪' },
        { 'title': ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy sead euismod dolore tincidunt ut laoreet dolore dolor sit amet', 'time': '2019-04-22 13:59:01', 'local': 'Bob Robson', 'font': '原', 'label': '#USA', 'label1': '#涉枪' },
        { 'title': ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy sead euismod dolore tincidunt ut laoreet dolore dolor sit amet', 'time': '2019-04-22 13:59:01', 'local': 'Bob Robson', 'font': '原', 'label': '#USA', 'label1': '#涉枪' }]
    };
  }
  async tabs(){
    return {
      code:0,
      data: [
        {
          title: '突发事件',
          list: [
            {
              icon: 'clock-circle',
              info: 'You have 4 pending tasks',
              time: 'Just now',
            },
            {
              icon: 'clock-circle',
              info: 'New user registered.',
              time: '30 mins',
            },
            {
              icon: 'clock-circle',
              info: 'Web server hardware needs to be upgraded.',
              time: '29 mins',
            },
            {
              icon: 'clock-circle',
              info: 'New order received. Please take care of it.',
              time: '26 mins',
            },
            {
              icon: 'clock-circle',
              info: 'You have 4 pending tasks',
              time: '40 mins',
            },
            {
              icon: 'clock-circle',
              info: 'New order received. Please take care of it.',
              time: '27 mins',
            },
            {
              icon: 'clock-circle',
              info: 'Database server #12 overloaded. Please fix the issue.',
              time: '21 mins',
            },
            {
              icon: 'clock-circle',
              info: 'New order received. Please take care of it.',
              time: '22 mins',
            },
            {
              icon: 'clock-circle',
              info: 'New order received. Please take care of it.',
              time: '20 mins',
            },
          ],
        },
        {
          title: '热点事件',
          list: [
            {
              icon: 'font-size',
              info: 'New user registered',
              time: 'Just now',
            },
            {
              icon: 'font-size',
              info: 'New order received',
              time: 'Just Now',
            },
            {
              icon: 'font-size',
              info: 'New user registed',
              time: '29 mins',
            },
            {
              icon: 'font-size',
              info: 'Order #24DOP4 has been rejected',
              time: '21 mins',
            },
            {
              icon: 'font-size',
              info: 'You have 4 pending tasks',
              time: '1 hour',
            },
            {
              icon: 'font-size',
              info: 'New user registed',
              time: '27 mins',
            },
            {
              icon: 'font-size',
              info: 'New user registed',
              time: '40 mins',
            },
            {
              icon: 'font-size',
              info: 'New user registed',
              time: 'Just Now',
            },
            {
              icon: 'font-size',
              info: 'New user registed',
              time: '24 mins',
            },
          ],
        },
      ],

    };
  }
  async Name(){
    return {
      code:0,
      data:[
        {
          name:'Metronic Admin Reborn',
          title:'sajdksajhfkjsdhkjvhskjdvhkjsjkvhkjsdfhvkjhdfk',
        },
        {
          name:'Metronic Admin Reborn',
          title:'sajdksajhfkjsdhkjvhskjdvhkjsjkvhkjsdfhvkjhdfk',
        },{
          name:'Metronic Admin Reborn',
          title:'sajdksajhfkjsdhkjvhskjdvhkjsjkvhkjsdfhvkjhdfk',
        },{
          name:'Metronic Admin Reborn',
          title:'sajdksajhfkjsdhkjvhskjdvhkjsjkvhkjsdfhvkjhdfk',
        },{
          name:'Metronic Admin Reborn',
          title:'sajdksajhfkjsdhkjvhskjdvhkjsjkvhkjsdfhvkjhdfk',
        }
      ]
    };
  }
  async data(){
    return {
      code:0,
      list:[
        {
          num:1207800,
          name:toString,
          tit:'全部数据量',
          day:'今日数据量',
          number:300
        },
        {
          num:1207800,
          name:toString,
          tit:'全部数据量',
          day:'今日数据量',
          number:300
        },

        {
          num:1207800,
          name:toString,
          tit:'全部数据量',
          day:'今日数据量',
          number:300
        },
        {
          num:1207800,
          name:toString,
          tit:'全部数据量',
          day:'今日数据量',
          number:300
        },
        {
          num:1207800,
          name:toString,
          tit:'全部数据量',
          day:'今日数据量',
          number:300
        }
      ]
    };
  }
  async home() {
    return {
      code: 0,
      data: [
        {
          columns: [
            {
              title: '账户',
              dataIndex: 'user',
            },
            {
              title: '最近登录时间',
              dataIndex: 'loginTime',
            },
            {
              title: '登录状态',
              dataIndex: 'loginState',
            },
            {
              title: '群组列表',
              dataIndex: 'teamList',
            },
          ],
        },
        {
          data: [
            {
              key: '1',
              user: 'John Brown',
              loginTime: '2019/02/24',
              loginState: 'Ok',
              teamList: '无',
            },
            {
              key: '2',
              user: 'John Brown',
              loginTime: '2019/02/24',
              loginState: 'Ok',
              teamList: '无',
            },
            {
              key: '3',
              user: 'John Brown',
              loginTime: '2019/02/24',
              loginState: 'Ok',
              teamList: '无',
            },
          ],
        },
      ],
    };
  }

}
module.exports = homeService;
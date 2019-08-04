'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // const id=ctx.request.query.id;
    const res=await ctx.service.homeService.homeSer();
    ctx.body = res;
  }
  async sudden() {
    const { ctx } = this;
    // const id=ctx.request.query.id;
    const res=await ctx.service.homeService.tabs();
    ctx.body = res;
  }
  async Name() {
    const { ctx } = this;
    // const id=ctx.request.query.id;
    const res=await ctx.service.homeService.Name();
    ctx.body = res;
  }
  async Data(){
    const { ctx } = this;
    // const id=ctx.request.query.id;
    const res=await ctx.service.homeService.data();
    ctx.body = res;
  }
  async Home(){
    const { ctx } = this;
    // const id=ctx.request.query.id;
    const res=await ctx.service.homeService.home();
    ctx.body = res;
  }

}

module.exports = HomeController;

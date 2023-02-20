<template>
  <el-container>
    <el-header style="height: 80px">
      <!-- <el-page-header @back="goBack"></el-page-header> -->
      <div class="alignCenter_row">
        <el-image style="width: 80px" :src="$store.state.logo"></el-image>
        <span class="appName">{{ $store.state.appLabel }}</span>
      </div>
      <div class="mine">
        <el-avatar :size="44" :src="$store.state.avatar"></el-avatar>
        <span style="margin-left: 12px">{{ $store.state.author }}</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>导航一</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>导航三</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <!-- <el-button type="primary" @click="update()">更新数据</el-button> -->
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox
                  label="美食/餐厅线上活动"
                  name="type"
                ></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  computed: {
    ...mapState(["myHome"]),
  },
  mounted() {
    this.handleQuery();
  },
  methods: {
    handleQuery() {
      // 触发action(必须调用dispatch方法)
      this.$store.dispatch("myHome/queryData");
    },
    update() {
      this.$store.state.author =
        this.$store.state.author == "carina" ? "秋山" : "carina";
    },
    onSubmit() {
      console.log("submit!", this.form);
    },
    goBack() {
      console.log("goBack");
    },
  },
};
</script>

<style lang="scss" scoped>
.appName {
  font-weight: 600;
  font-size: 22px;
  font-family: 'Courier New', Courier, monospace;
}
.between_row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.alignCenter_row {
  display: flex;
  align-items: center;
}
.el-header {
  width: 100%;
  background-color: #ba55d3;
  color: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .mine {
    display: flex;
    align-items: center;
  }
}
.el-footer {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
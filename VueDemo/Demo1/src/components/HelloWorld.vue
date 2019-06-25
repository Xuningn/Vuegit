<template >
  <div>
    <form method="post" action="">
      <h3>基本信息</h3>
      <hr/>
      <table>
        <tr>
          <td>
            <label for="enName">英文名称：</label>
            <input type="text" id="enName" name="enName" v-model="form.enName">
          </td>
          <td>
            <label for="chName">中文名称：</label>
            <input type="text" id="chName" name="chName" v-model="form.chName">
          </td>
        </tr>
        <tr>
          <td>
            <label for="valueType">数据类型：</label>
            <select id="valueType" name="valueType" v-model="form.valueType">
              <option v-for="item in valueTypes" :label="item.label" :key="'valueType' + item.value"
                      :value="item.value"></option>
            </select>
          </td>
          <td>
            <label for="valueUnit">单位：</label>
            <input type="text" id="valueUnit" name="valueUnit" v-model="form.valueUnit">
          </td>
        </tr>
        <tr>
          <td>
            <label for="desc">字段描述：</label>
            <textarea id="desc" name="desc" v-model="form.desc"></textarea>
          </td>
        </tr>
      </table>
      <h3>属性信息</h3>
      <hr/>
      <table>
        <tr>
          <label>添加属性</label>
          <label>是<input type="radio" name="addProp" v-bind:value="true" v-model="hasProp"
                         @change="changeHasProp"></label>
          <label>否<input type="radio" name="addProp" v-bind:value="false" v-model="hasProp"></label>
        </tr>

        <div v-if="hasProp">

          <tr>
            <th>属性名</th>
            <th>属性值</th>
            <th>添加</th>
          </tr>
          <tr v-for="(row, index) in form.props" :key="'props' + index">
            <td>
              <select v-model="row.name">
                <option v-for="item in form.allProps" :key="'propname' + item" :value="item" :label="item"></option>
              </select>
            </td>
            <td>
              <select v-model="row.values">
                <option v-for="item in row.allValues" :key="'propvalue' + item" :value="item" :label="item"></option>
              </select>
            </td>
            <td>
              <button type="button" @click="addProp(index)">+</button>
              <button type="button" @click="removeProp(index)" :disabled="index === 0">-</button>
            </td>
          </tr>

        </div>
      </table>
      <h3>字段构成</h3>
      <hr/>
      <table>

        <tr>
          <td>
            <label>存在父级字段</label>
          </td>
          <td>
            <label>是<input type="radio" name="hasParent" v-bind:value="true" v-model="hasParent"/></label>
            <label>否<input type="radio" name="hasParent" v-bind:value="false" v-model="hasParent"/></label>
          </td>
          <td>
            <select v-if="hasParent" v-model="form.parentId">
              <option v-for="item in form.allFields" :key="item.id" :value="item.id" :label="item.enName"></option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label>枚举型</label>
          </td>
          <td>
            <label>是<input type="radio" name="valueDomainType" v-bind:value="true" v-model="form.valueDomainType"></label>
            <label>否<input type="radio" name="valueDomainType" v-bind:value="false"
                           v-model="form.valueDomainType"></label>
          </td>
        </tr>
        <table v-if="form.valueDomainType">
          <tr>
            <th>枚举值</th>
            <th>描述</th>
            <th>添加</th>
          </tr>
          <tr v-for="(row, index) in form.values" :key="'props' + index">
            <td>
              <input palceholder="输入枚举值" v-model="row.value">
            </td>
            <td>
              <input placeholder="输入描述" v-model="row.desc">
            </td>
            <td v-if="hasParent">
              <select v-model="row.parentValue">
                <option v-for="(item, index) in parentPropValues" :key="'parent' + item.value + index" :label="item.value"
                        :value="item.value"></option>
              </select>
            </td>
            <td>
              <button type="button" @click="addEnum(index)">+</button>
              <button type="button" @click="removeEnum(index)" :disabled="index === 0">-</button>
            </td>
          </tr>

        </table>
        <tr>
          <label>计算方式</label>
          <td>
            <select v-model="form.valueCalculateType">
              <option v-for="item in calculateTypes" :key="'calculateType' + item.value" :label="item.label"></option>
            </select>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      hasProp: false,
      hasParent: false,
      parentPropValues: [{id: 1, value: 'value1'}, {id: 2, value: 'value2'}],
      form: {
        enName: '',
        chName: '',
        valueUnits: '',
        valueType: '',
        desc: '',
        allProps: [1, 2, 3],
        allFields: [{id: 1, enName: 'name'}],
        valueCalculateType: '',
        valueDomainType: false,
        props: [
          {
            name: '',
            allValues: [1, 2, 3, 4],
            values: []
          }
        ],
        parentId: '',
        values: [
          {
            value: '',
            desc: '',
            parentValue: ''
          }
        ]
      },
      valueTypes: [
        {
          label: 'STRING',
          value: 1
        },
        {
          label: 'TINYINT',
          value: 2
        },
        {
          label: 'SMALLINT',
          value: 3
        }
      ],
      calculateTypes: [
        {
          label: 'count()',
          value: 1
        },
        {
          label: 'count(distinct())',
          value: 2
        }
      ]
    }
  },
  methods: {
    changeHasProp (value) {
      if (value === true) {
        let props = this.form.props || []
        !props.length &&
        this.form.props.push({
          name: '',
          values: [],
          allValues: []
        })
      }
    },
    addProp (index) {
      let dealIndex = index + 1
      let newItem = {
        name: '',
        value: [],
        allValues: [1, 2, 3, 4]
      }
      this.form.props.splice(dealIndex, 0, newItem)
    },
    removeProp (index) {
      this.form.props.splice(index, 1)
    },
    addEnum (index) {
      let dealIndex = index + 1
      let newItem = {
        value: '',
        desc: '',
        parentValue: ''
      }
      this.form.values.splice(dealIndex, 0, newItem)
    },
    removeEnum (index) {
      this.form.values.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .redTitle {
    color: red;
  }
</style>

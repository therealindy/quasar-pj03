import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

//describe('IndexPage', () => {
  //it('ตรวจสอบหัวข้อ (title)', () => {
    //const wrapper = shallowMount(IndexPage)
    //let header = wrapper.find('.htmlClass h1')
    //expect(header.exists()).toBe(true)
    //expect(header.text())
      //.toBe('ฮ่าฮ่าฮ่า.')
  //})
  //it('ตรวจสอบตัวแปรชื่อว่า title', () => {
    //const wrapper = shallowMount(IndexPage, {
      //data () {
        //return {
          //title: 'ฉันรักวิว.'
        //}
      //}
    //})
    //let header = wrapper.find('.htmlClass h1')
    //expect(header.text()).toBe('ฉันรักวิว.')
  //})

//});

//test('ทดสอบว่ามีฟอร์ม', () => {
  //const wrapper = shallowMount(IndexPage)
  //expect(wrapper.find('form').exists()).toBe(true)
//})

//test('ทดสอบว่าในฟอร์ม', () => {
  //const wrapper = shallowMount(IndexPage)
  //expect(wrapper.find('form > input').exists()).toBe(true)
//})

//test('ทดสอบว่ามีปุ่ม', () => {
  //const wrapper = shallowMount(IndexPage)
  //expect(wrapper.find('button').exists()).toBe(true)
//})

describe('ประวัติส่วนตัว', () => {

  it('ชื่อ', () => {
    const wrapper = shallowMount(IndexPage,{
      data () {
        return {
          title: 'กวินธิดา'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('กวินธิดา')
  })

  it('นามสกุล', () => {
    const wrapper = shallowMount(IndexPage,{
      data () {
        return {
          title: 'ภูงาม'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('ภูงาม')
  })

  it('รหัสนักศึกษา', () => {
    const wrapper = shallowMount(IndexPage,{
      data () {
        return {
          title: '6604101303'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('6604101303')
  })

  it('ชื่อเล่น', () => {
    const wrapper = shallowMount(IndexPage,{
      data () {
        return {
          title: 'อินดี้'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('อินดี้')
  })
})

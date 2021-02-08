import { Button, Select, Card, Form, FormItem, Input, Message, MessageBox, Image, Submenu, Menu, Scrollbar, MenuItem, Container, Aside,
  Header, Table, Dropdown, DropdownItem, DropdownMenu, Main, TableColumn, Breadcrumb, BreadcrumbItem, Tooltip, ColorPicker } from 'element-ui'

const element = {
  install: function(Vue) {
    Vue.use(Button)
    Vue.use(Select)
    Vue.use(Card)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Image)
    Vue.use(Submenu)
    Vue.use(Menu)
    Vue.use(MenuItem)
    Vue.use(Scrollbar)
    Vue.use(Container)
    Vue.use(Aside)
    Vue.use(Header)
    Vue.use(Table)
    Vue.use(Dropdown)
    Vue.use(DropdownItem)
    Vue.use(DropdownMenu)
    Vue.use(Main)
    Vue.use(TableColumn)
    Vue.use(Breadcrumb)
    Vue.use(BreadcrumbItem)
    Vue.use(Tooltip)
    Vue.use(ColorPicker)
    Vue.component(Message.name, Message) // 解决按需加载时 打开页面会自动弹出的问题
    Vue.component(MessageBox.name, MessageBox)
  }
}

export default element

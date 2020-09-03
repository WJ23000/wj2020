Component({
  data: {
    type: ""
  },
  props: {
    type: String // 目前接受的数据类型为 String、Boolean、Number、Object、Array、null（表示任意数据类型）
  },
  didMount() {
    this.setData({
      type: this.props.type
    })
  },
  didUpdate() {

  },
  methods: {
    onClickParent(e) {
      this.props.onClickChild({id:1, type:"goodsList"})
    }
  }
});

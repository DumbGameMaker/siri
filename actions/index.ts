class action {
  constructor(
    name: String,
    inputs: Array<any>,
    priveleged: Boolean,
    moderation: Boolean,
    external: Boolean,
    callback: Function
  ) {
    this.name = name;
    this.inputs = inputs || [];
    this.bitfield =
      (priveleged ? 1 : 0) + (moderation ? 2 : 0) + (external ? 4 : 0);
    this.callback = callback;
  }
  name;
  inputs;
  bitfield;
  callback;
}

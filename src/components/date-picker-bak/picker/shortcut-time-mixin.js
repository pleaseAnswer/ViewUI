import { oneOf, deepCopy } from '../../../utils/assist';
export default{
    data () {
        return {
            shortcutMenu: [],
            shortcutMenuDropdown: false,
        };
    },
    methods: {
        shortcutMenuDataHandler: function(){
            this.shortcutMenu.splice(0);
            let callbackOption = deepCopy(this.options);
            if(callbackOption.shortcuts instanceof Array && callbackOption.shortcutsArr && (callbackOption.shortcutsArr instanceof Array)) {
                for (var i = callbackOption.shortcuts.length - 1; i >= 0; i--) {
                    if(callbackOption.shortcutsArr.indexOf(callbackOption.shortcuts[i].name) === -1) callbackOption.shortcuts.splice(i,1);
                };
            };
            if(callbackOption && (callbackOption.shortcuts instanceof Array)) this.shortcutMenu.push(...callbackOption.shortcuts);
            callbackOption = null;

            // if(this.options && (this.options.shortcuts instanceof Array)){
            //     this.shortcutMenu.push(...this.options.shortcuts);
            // }
        },
        shortcutContainerClickHandler: function(menuVisible){
            if(menuVisible) this.visible = false;
        },
        shortcutClickHandler: function(shortcut){
            if (this.readonly || this.disabled) return;
            this.shortcutMenuClose();

            if (shortcut.value) {
                let value = shortcut.value();
                this.onPick(value);
            }

            if (shortcut.onClick) shortcut.onClick(this);

            setTimeout(() => {
                this.$emit('on-shortcut-selected'); // 时间快捷方式被选中
                this.focus();
                this.reset();
            }, 0);
        },
        shortcutMenuToggle: function(){
            if (this.readonly || this.disabled) return;
            this.shortcutMenuDropdown = !this.shortcutMenuDropdown;
        },
        shortcutMenuOpen: function(){
            this.shortcutMenuDropdown = true;
        },
        shortcutMenuClose: function(){
            this.shortcutMenuDropdown = false;
        },
    },
    mounted () {
        this.shortcutMenuDataHandler();
    },
};

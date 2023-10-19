import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, project, saveProjectName, memberData, saveProjectSelect, showSettings, changeState, deleteProjectName } from './Project.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'new-project'?: boolean; } &
{ 'project-name'?: boolean; } &
{ 'arrow'?: boolean; } &
{ 'setting'?: boolean; } &
{ 'setting'?: boolean; } &
{ 'setting'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'LaleInput', typeof __VLS_localComponents, "LaleInput", "laleInput", "lale-input"> &
__VLS_WithComponent<'ASelect', typeof __VLS_localComponents, "ASelect", "aSelect", "a-select"> &
__VLS_WithComponent<'LaleDropdown', typeof __VLS_localComponents, "LaleDropdown", "laleDropdown", "lale-dropdown"> &
__VLS_WithComponent<'LaleMenu', typeof __VLS_localComponents, "LaleMenu", "laleMenu", "lale-menu"> &
__VLS_WithComponent<'LaleMenuItem', typeof __VLS_localComponents, "LaleMenuItem", "laleMenuItem", "lale-menu-item">;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
__VLS_components.LaleInput; __VLS_components.laleInput; __VLS_components["lale-input"];
// @ts-ignore
[LaleInput,];
({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i;
__VLS_components.ASelect; __VLS_components.ASelect; __VLS_components.aSelect; __VLS_components.aSelect; __VLS_components["a-select"]; __VLS_components["a-select"];
// @ts-ignore
[ASelect, ASelect,];
__VLS_components.LaleDropdown; __VLS_components.LaleDropdown; __VLS_components.laleDropdown; __VLS_components.laleDropdown; __VLS_components["lale-dropdown"]; __VLS_components["lale-dropdown"];
// @ts-ignore
[LaleDropdown, LaleDropdown,];
({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template;
__VLS_components.LaleMenu; __VLS_components.LaleMenu; __VLS_components.laleMenu; __VLS_components.laleMenu; __VLS_components["lale-menu"]; __VLS_components["lale-menu"];
// @ts-ignore
[LaleMenu, LaleMenu,];
__VLS_components.LaleMenuItem; __VLS_components.LaleMenuItem; __VLS_components.laleMenuItem; __VLS_components.laleMenuItem; __VLS_components["lale-menu-item"]; __VLS_components["lale-menu-item"];
// @ts-ignore
[LaleMenuItem, LaleMenuItem,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{}, class: ("new-project"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("new-project"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
let __VLS_5!: 'LaleInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.LaleInput : 'laleInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.laleInput : 'lale-input' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['lale-input'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['LaleInput'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{ onInput: {} as any, }, placeholder: ("請輸入Project名稱"), class: ("project-name"), style: ({}), modelValue: ((__VLS_ctx.project.name)), }));
({} as { LaleInput: typeof __VLS_5; }).LaleInput;
const __VLS_7 = __VLS_6({ ...{ onInput: {} as any, }, placeholder: ("請輸入Project名稱"), class: ("project-name"), style: ({}), modelValue: ((__VLS_ctx.project.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ onInput: {} as any, }, placeholder: ("請輸入Project名稱"), class: ("project-name"), style: ({}), modelValue: ((__VLS_ctx.project.name)), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
let __VLS_10 = { 'input': __VLS_pickEvent(__VLS_9['input'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_6, typeof __VLS_7>).onInput) };
__VLS_10 = {
input: $event => {
__VLS_ctx.saveProjectName(__VLS_ctx.item);
}
};
}
{
const __VLS_11 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_12 = __VLS_elementAsFunctionalComponent(__VLS_11);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_13 = __VLS_12({ ...{}, class: ("fas fa-user-plus"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_13> & Record<string, unknown>) => void)({ ...{}, class: ("fas fa-user-plus"), });
const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13)!;
let __VLS_15!: __VLS_NormalizeEmits<typeof __VLS_14.emit>;
}
{
let __VLS_16!: 'ASelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ASelect : 'aSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.aSelect : 'a-select' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['a-select'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ASelect'];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{ onChange: {} as any, }, mode: ("tags"), style: ({}), tokenSeparators: (([','])), placeholder: ("新增成員"), options: ((__VLS_ctx.memberData)), modelValue: ((__VLS_ctx.project.memberList[0])), }));
({} as { ASelect: typeof __VLS_16; }).ASelect;
({} as { ASelect: typeof __VLS_16; }).ASelect;
const __VLS_18 = __VLS_17({ ...{ onChange: {} as any, }, mode: ("tags"), style: ({}), tokenSeparators: (([','])), placeholder: ("新增成員"), options: ((__VLS_ctx.memberData)), modelValue: ((__VLS_ctx.project.memberList[0])), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> & Record<string, unknown>) => void)({ ...{ onChange: {} as any, }, mode: ("tags"), style: ({}), tokenSeparators: (([','])), placeholder: ("新增成員"), options: ((__VLS_ctx.memberData)), modelValue: ((__VLS_ctx.project.memberList[0])), });
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
let __VLS_20!: __VLS_NormalizeEmits<typeof __VLS_19.emit>;
let __VLS_21 = { 'change': __VLS_pickEvent(__VLS_20['change'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_17, typeof __VLS_18>).onChange) };
__VLS_21 = {
change: (__VLS_ctx.saveProjectSelect)
};
}
{
const __VLS_22 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_23 = __VLS_elementAsFunctionalComponent(__VLS_22);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_24 = __VLS_23({ ...{}, class: ("arrow"), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_22, typeof __VLS_24> & Record<string, unknown>) => void)({ ...{}, class: ("arrow"), });
const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24)!;
let __VLS_26!: __VLS_NormalizeEmits<typeof __VLS_25.emit>;
if (__VLS_ctx.showSettings[__VLS_ctx.project.projectId]) {
{
const __VLS_27 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_28 = __VLS_elementAsFunctionalComponent(__VLS_27);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_29 = __VLS_28({ ...{ onClick: {} as any, }, class: ("fas fa-chevron-up"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_27, typeof __VLS_29> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("fas fa-chevron-up"), });
const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29)!;
let __VLS_31!: __VLS_NormalizeEmits<typeof __VLS_30.emit>;
let __VLS_32 = { 'click': __VLS_pickEvent(__VLS_31['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_29>).onClick) };
__VLS_32 = {
click: $event => {
if (!((__VLS_ctx.showSettings[__VLS_ctx.project.projectId]))) return;
__VLS_ctx.changeState(__VLS_ctx.project.projectId);
}
};
}
// @ts-ignore
[project, project, project, saveProjectName, item, memberData, project, memberData, project, memberData, project, saveProjectSelect, showSettings, project, changeState, project,];
}
else {
{
const __VLS_33 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_35 = __VLS_34({ ...{ onClick: {} as any, }, class: ("fas fa-chevron-down"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_33, typeof __VLS_35> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("fas fa-chevron-down"), });
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
let __VLS_37!: __VLS_NormalizeEmits<typeof __VLS_36.emit>;
let __VLS_38 = { 'click': __VLS_pickEvent(__VLS_37['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_34, typeof __VLS_35>).onClick) };
__VLS_38 = {
click: $event => {
if (!(!((__VLS_ctx.showSettings[__VLS_ctx.project.projectId])))) return;
__VLS_ctx.changeState(__VLS_ctx.project.projectId);
}
};
}
// @ts-ignore
[changeState, project,];
}
(__VLS_25.slots!).default;
}
{
const __VLS_39 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_40 = __VLS_elementAsFunctionalComponent(__VLS_39);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_41 = __VLS_40({ ...{}, class: ("setting"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_39, typeof __VLS_41> & Record<string, unknown>) => void)({ ...{}, class: ("setting"), });
const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41)!;
let __VLS_43!: __VLS_NormalizeEmits<typeof __VLS_42.emit>;
{
let __VLS_44!: 'LaleDropdown' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.LaleDropdown : 'laleDropdown' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.laleDropdown : 'lale-dropdown' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['lale-dropdown'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['LaleDropdown'];
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{}, trigger: ((['click'])), }));
({} as { LaleDropdown: typeof __VLS_44; }).LaleDropdown;
({} as { LaleDropdown: typeof __VLS_44; }).LaleDropdown;
const __VLS_46 = __VLS_45({ ...{}, trigger: ((['click'])), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_44, typeof __VLS_46> & Record<string, unknown>) => void)({ ...{}, trigger: ((['click'])), });
const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46)!;
let __VLS_48!: __VLS_NormalizeEmits<typeof __VLS_47.emit>;
{
const __VLS_49 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_50 = __VLS_elementAsFunctionalComponent(__VLS_49);
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_51 = __VLS_50({ ...{ onClick: {} as any, }, class: ("ant-dropdown-link"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_49, typeof __VLS_51> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("ant-dropdown-link"), });
const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51)!;
let __VLS_53!: __VLS_NormalizeEmits<typeof __VLS_52.emit>;
let __VLS_54 = { 'click': __VLS_pickEvent(__VLS_53['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_51>).onClick) };
__VLS_54 = {
click: () => { }
};
{
const __VLS_55 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_57 = __VLS_56({ ...{}, class: ("fas fa-ellipsis-v"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, class: ("fas fa-ellipsis-v"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
}
(__VLS_52.slots!).default;
}
{
const __VLS_60 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_62 = __VLS_61({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_47.slots!).overlay;
{
let __VLS_63!: 'LaleMenu' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.LaleMenu : 'laleMenu' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.laleMenu : 'lale-menu' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['lale-menu'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['LaleMenu'];
const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ ...{}, }));
({} as { LaleMenu: typeof __VLS_63; }).LaleMenu;
({} as { LaleMenu: typeof __VLS_63; }).LaleMenu;
const __VLS_65 = __VLS_64({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_64));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_63, typeof __VLS_65> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_66 = __VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65)!;
let __VLS_67!: __VLS_NormalizeEmits<typeof __VLS_66.emit>;
{
let __VLS_68!: 'LaleMenuItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.LaleMenuItem : 'laleMenuItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.laleMenuItem : 'lale-menu-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['lale-menu-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['LaleMenuItem'];
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ ...{ onEmit: {} as any, }, key: ("1"), }));
({} as { LaleMenuItem: typeof __VLS_68; }).LaleMenuItem;
({} as { LaleMenuItem: typeof __VLS_68; }).LaleMenuItem;
const __VLS_70 = __VLS_69({ ...{ onEmit: {} as any, }, key: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_68, typeof __VLS_70> & Record<string, unknown>) => void)({ ...{ onEmit: {} as any, }, key: ("1"), });
const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70)!;
let __VLS_72!: __VLS_NormalizeEmits<typeof __VLS_71.emit>;
let __VLS_73 = { 'emit': __VLS_pickEvent(__VLS_72['emit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_69, typeof __VLS_70>).onEmit) };
__VLS_73 = {
emit: $event => {
__VLS_ctx.deleteProjectName(__VLS_ctx.project);
}
};
(__VLS_71.slots!).default;
}
(__VLS_66.slots!).default;
}
}
}
}
(__VLS_42.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["new-project"];
__VLS_styleScopedClasses["project-name"];
__VLS_styleScopedClasses["fas"];
__VLS_styleScopedClasses["fa-user-plus"];
__VLS_styleScopedClasses["arrow"];
__VLS_styleScopedClasses["fas"];
__VLS_styleScopedClasses["fa-chevron-up"];
__VLS_styleScopedClasses["fas"];
__VLS_styleScopedClasses["fa-chevron-down"];
__VLS_styleScopedClasses["setting"];
__VLS_styleScopedClasses["ant-dropdown-link"];
__VLS_styleScopedClasses["fas"];
__VLS_styleScopedClasses["fa-ellipsis-v"];
}
var __VLS_slots!: {};
// @ts-ignore
[deleteProjectName, project,];
return __VLS_slots;
}

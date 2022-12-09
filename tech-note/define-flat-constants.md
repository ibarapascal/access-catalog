---
title: Define Flat Constants
date: March 2020
---

There are always situations that need us to define a list of values/relationships, like dropdown options, possible return values, etc.  

Since we are using Typescript as a default consideration, there is always the requirement to use those constant types safely.  

### as const

The first attempt made years ago, was to define the list using [as const](https://typescriptbook.jp/reference/values-types-variables/const-assertion)


```tsx
export const CARD_TYPE = [
  { attr: 'text', label: 'テキスト', formatter: ... }, 
  { attr: 'date', label: '日期選択', formatter: ... }
] as const;

const cardTypeList = CARD_TYPE.map(x => x.type);
export type CardType = typeof cardTypeList[number];
```

Here the `CardType` is equivalent to the definition below

```tsx
type CardType = 'text' | 'date'
```

In this way, not only define a list of constants, but we could also generate the [Union Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) for that constants in the same place to use later.  

```tsx
const [cardType, setCardType] = useState<CardType>('text');
```

However, since we still need to touch everywhere if we want to change the `text` to something like `textbook`, which leads us to come to [enums](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#enums)

### enum

We quickly came to the thought that it's not incompatible with what we have done before, to put the definition of both types and constants together.  

```tsx
export enum CardType {
  TEXT = 'text',
  DATE = 'date',
}
export const cardList = [
  { label: 'テキスト', value: CardType.TEXT, formatter: ... },
  { label: '日期選択', value: CardType.DATE, formatter: ... },
]
```

### flat structure

So far we have a general approach to defining constants with types. What about tree structure constants? For example, when we use some form libs like [react-hook-form](https://github.com/react-hook-form/react-hook-form), if the conditional attributes grow, we may need to define the init form config constant using a tree structure.  

One option to achieve it is flat/un-flat them all. We can still define the constants using a flat structure, combining them together, doing the validation under the flat structure, and submitting after un-flat. We can use some of the libs like [flat](https://github.com/hughsk/flat) to help us do that.  

```tsx
export const basicInfoForm: Array<FormItem> = [
  {
    label: '属性',
    value: BasicInfoForm.TYPE,
    form: Yup.number().required(),
    type: FormItemType.SELECT,
    option: InputTypeOption,
    formatter: acquireFromOptions(InputTypeOption)
  },
  {
    label: '関係',
    value: BasicInfoForm.RELATION,
    form: Yup.string().required().max(150),
    type: FormItemType.INPUT,
  },
  ...
];
```

There are always Pros & Cons doing that, sometimes it's a quick solution but we need to pay much attention cause it could go uncontrollable while the requirement changes!  

#### Pros

- validation error check goes extremely easy  
- conditionally removing part of the input fields corssing Objects is also directly handlable via filters  

#### Cons

- complex conditional form based on the dependencies cross entier form leads to uncontrollable complexity if using only flat structure  
- type-safe middle object attribute leads to ugly codes  

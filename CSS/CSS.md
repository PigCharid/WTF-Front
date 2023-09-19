# 一、选择器

## 1.简单选择器

* 元素
* 类选择器
* id选择器

## 2.组合选择器

* 后代选择器----空格
* 子选择器---->                    所有的子元素都会被选择，和后代选择器没啥区别

* 相邻兄弟选择器----+         第一个相邻的兄弟会被选择

* 通用兄弟选择器-----~        所有的兄弟元素都会被选择

## 3.伪类选择器

* a链接的伪类（用的也不多）
  * :link  				未访问的链接
  * :hover              
  * :active               已选择的链接
  * :visited              已经访问过的元素
* hover
  * 普通hover效果
  * 通过hover控制其他元素的显示
* :first-child
  * 第一个元素
  * 某元素下的第一个什么元素
* :checked                单选多选的选中标记
* :disabled
* :focus
* :last-child
* :not
* :nth-child(n)           选择作为其父的第二个子元素的每个 p 元素
* :nth-last-child(n)    倒数第几个子元素
* :required                 

## 4.伪元素选择器

伪元素选择器用的不多，after和before用的会多一些，了解即可

* ::after

* ::before
* ::first-letter
* ::first-line
* ::selection

## 5.属性选择器

* [attribute]
* [attribute = value]
* [attribute ~= value]  不止一个attribute属性的时候，可以用这个来选择
* [attribute |= value]    class属性以value开头的属性 必须是完整的value值或者value-这样的
* [attribute ^= value]    class属性以value开头的属性开头包含value就行
* [attribute $= value]    class属性以value结尾
* [attribute *= value]    class属性包含value



## 6.选择器优先级

!important--内联--ID--类--属性--伪类--元素--伪元素





# 二、颜色

## 1.颜色名

## 2.rgb颜色

## 3.hex颜色

## 4.hsl颜色

​		用的不多



# 三、背景

## 1.属性

* color
* opacity+color = ragba
* bg-image
* bg-repeat
  * repeat-x
  * repeat-y
  * no-repeat
* bg-position
* bg-attachment
  * fixed
  * scroll
* bg-size
  * contain
  * cover
  * 

# 四、边框



# 五、外边距

## 1.外边距合并

​		外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距，合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者

# 六、盒模型

# 七、轮廓

# 八、文本

# 九、字体

# 十、列表

## 1.属性

* 标记属性：list-style-type
  * circle
  * square
  * upper-roman
  * lower-alpha
  * none 删除标记
* 图像标记：list-style-image
  * url	指定资源链接
* 缩进标记：list-style-position
  * outside
  * inside
* 标记简写：list-style

# 十一、Display

## 1.属性

* block
* inline
* none
  * visibility:hidden隐藏元素但是暴露位置
* inline-block
* grid
* inline-grid
* flex

# 十二、Max

# 十三、定位

## 1.position属性

* static
* relative
* fixed
* absolute
* sticky

## 2.位置属性

* 元素其实是使用 top、bottom、left 和 right 属性定位的。但是，除非首先设置了 position 属性，否则这些属性将不起作用。

## 2.层次属性

* z-index

# 十四、溢出

## 1.overflow属性

* visible
* hidden
* scroll
* auto

## 2.方向控制

* overflow-x
* overflow-y

# 十五、浮动

## 1.float属性

* left
* right
* none
* inherit

## 2.clear属性

* none
* left
* right
* both
* inherit

## 3.浮动填充

防止浮动的元素跑到外部

```css
.clearfix {
  overflow: auto;
}
```

# 十六、对齐

## 1.垂直居中的方式

* padding设置上下边距一致，显得就是垂直居中了

* line-height = height

* 

  



## 2.水平居中的方式

* 块级元素-------margin：auto
* 图像居中：变成块级元素+margin：auto
* 文本居中：text-align：center
* 





## 3.垂直水平居中

* flex-------justify-content
* 相对定位+transform:translate(-50%,-50%)

# 十七、不透明度

# 十八、单位

# 十九、渐变

# 二十、阴影

## 1.text-shadow

## 2.box-shadow



# 二十一、动效

## 1.2D转化

### 1.1transfomer属性

* translate
* rotate
* scaleX
* scaleY
* scale
* SkewX
* skewY
* skew
* matrix

## 2.3D转化

## 2.1transfomer属性

* rotaleX
* rotaleY
* rotaleZ
* matrix3d
* translate3d
* translateX
* translateY
* translateZ
* scale3d
* scaleX
* scaleY
* scaleZ
* rotate3d
* rotateX
* rotateY
* rotateZ
* perspective      规定 3D 元素的透视效果

## 3.过度效果

* transition
* transtion-delay
* transtion-duration
* transtion-property   规定过渡效果所针对的 CSS 属性的名称
* transtion-timing-function
  * ease
  * linear
  * ease-in
  * ease-out
  * ease-in-out
  * cubic-bezier(n,n,n,n)

## 4.动画

* @keyframes
* animation-name
* animation-duration
* animation-delay
* animation-iteration-count
* animation-direction
  * normal
  * reverse
  * alternate
  * alternate-reverse
* animation-timing-function
  * ease
  * linear
  * ease-in
  * ease-out
  * ease-in-out
  * cubic-bezier(*n*,*n*,*n*,*n*)

* animatin-fill-mode
* animation



# 二十二、Object-fit

## 1.属性

* object-fit
  * cover
  * fill
  * contain
  * none
  * scale-down
  * 

# 二十三、变量



# 二十四、Box-sizing

# 二十五、Flex

## 1.属性

* flex-direction
  * row
  * row-reverse
  * column
  * column-reverse
* flex-wrap
  * wrap
  * nowrap
  * wrap-reverse
* flex-flow   direction和wrap的简写
* justify-content
  * center
  * flex-start
  * flex-end
  * space-around    均分
  * space-between   靠两边
* align-items
  * center
  * flex-start
  * flex-end
  * stretch   值拉伸 flex 项目以填充容器（默认）
  * baseline
  * 
* align-content  好像用的不多

## 1.弹性（flex）项目

* order

* flex-grow  控制子元素占比
* flex-shrink  规定某个 flex 项目相对于其余 flex 项目将收缩多少
* flex-basis  规定 flex 项目的初始长度
* flex 是grow shrink basis的简写
* align-self 规定弹性容器内所选项目的对齐方式，规定单个元素的垂直对齐方式
* 

# 二十六、网格布局

## 1.属性

* grid-column
  * span 跨越
* grid-row
  * span 跨越
* grid-gap
* grid-column-gap
* grid-row-gap
* grid-column-start
* grid-column-end
* grid-template-columns
* grid-template-rows
* justify-content
  * space-evenly   平分空间
  * space-between 两边留出相等的空间
  * sapce-around
  * center
  * start
  * end
* align-content
  * center
  * space-evenly 
  * space-around
  * space-between
  * start
  * end
* grid-area 行列开始结束的简写
* 



# 二十七、媒体查询

## 1.语法

```css
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
}
```

## 2.横向模式



# 二十八、响应式设计

## 1.视频

```css
width:100%
height:auto
```

## 2.图像

```css
width:100%
height:auto
```

```css
max-width:100%
height:auto
```





 
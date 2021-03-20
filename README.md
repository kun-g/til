Today I Learned
---
Reddit上也有个[Today I Learned](https://www.reddit.com/r/todayilearned/) 板块，大家在上面分享自己新学到的知识。
受[Hashrocket](https://til.hashrocket.com/)和[Simon Willison](https://til.simonwillison.net/)启发。也用Hugo建立一个服务，用于记录每天学到的零散知识点。

# TIL在学习过程中应该扮演什么样的角色
首先看一下学习过程中有哪些类似的东西：
* 源资料/文献库
* 笔记
* 清单
* 大纲
* 输出（文章、视频、音频……）

之所以把输出给拎出来，是为了讨论TIL是否需要公开部署。如果把TIL公开，那么对于其中的内容完整性和准确性是否要做要求？
其实TIL应该属于笔记，是一种用来收集碎片化的新知的笔记。
如果说笔记是输入和输出的缓冲地带，那么TIL就是碎片化的信息和结构化的笔记之间的缓冲地带。
不同的笔记会有不同的格式和侧重点，而TIL就关注新学到的东西：是什么？怎么做？有啥用？
TIL是把碎片化的信息进行一定的预处理，以便于后续的迭代（整合、对比、更新）。
TIL除了应该具备笔记的基础特征以外，最重要的是记录的便捷。

# TIL是否需要公开？
我认为应该把自己的工作公开，有些信息自己可能没什么用，但是别人可能会用得到。
但是公开就存在一个问题：完整性和准确性如何权衡？其实这个问题也并不难决策，其实可以用一个「自信指数」来标注一条记录：用0到10来表示自己对内容的确定程度，0 - 我不知道我在说啥，10 - 我知道我是对的。读者根据该指数来自行判断。
引入自信指数还有另外一个好处：它标注了我的能力圈，更方便我了解自己。甚至可以用自信指数来指导自己学什么（低自信区域），做什么（高自信区域）。

# TIL的结局
也就是TIL在整个学习流程里的使命完成之后，如何处理？那些自信程度拉满，又被整合进笔记，最终以某些形式输出的TIL们，是否要从库中删除？
我认为不需要，其实可以标注上最终这条TIL的相关结果，比如我今天学习了Python的某个特性，最终我写了一篇<Python 三大隐藏特性>介绍了这个特性，就可以在TIL中引用这篇文章，算是交代了TIL的归宿了。
事实上，TIL的每次迭代，都可以记录到TIL中，这算是这个TIL的一生了。

# 功能清单
* [ ] VIM命令，在所有的VIM窗口中都能新建TIL
* [ ] 自信指数上升到一定值之后，修改draft为false
* [ ] 

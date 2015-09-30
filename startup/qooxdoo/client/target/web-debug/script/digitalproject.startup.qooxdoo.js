(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"digitalproject.startup.qooxdoo.Application","qx.revision":"","qx.theme":"digitalproject.startup.qooxdoo.theme.Theme","qx.version":"4.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/web-debug/script"},"collapsablepanel":{"resourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/qooxdoo-collapsable-panel-zip/source/resource","sourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/qooxdoo-collapsable-panel-zip/source/class"},"digitalproject":{"resourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/src/main/resources","sourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/src/main/js"},"htmlarea":{"resourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/qooxdoo-htmlarea-zip/source/resource","sourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/qooxdoo-htmlarea-zip/source/class"},"org.jspresso.framework":{"resourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/jspresso-qooxdoo-client-zip/resources","sourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/jspresso-qooxdoo-client-zip/js"},"org.jspresso.framework.theme":{"resourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/jspresso-qooxdoo-theme-zip/resources","sourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/jspresso-qooxdoo-theme-zip/js"},"qx":{"resourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/qooxdoo-sdk/framework/source/resource","sourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/qooxdoo-sdk/framework/source/class","sourceViewUri":"https://github.com/qooxdoo/qooxdoo/blob/%{qxGitBranch}/framework/source/class/%{classFilePath}#L%{lineNumber}"},"uploadwidget":{"resourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/qooxdoo-upload-widget-zip/source/resource","sourceUri":"file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/qooxdoo-upload-widget-zip/source/class"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"en":null};
qx.$$locales = {"C":null,"en":null};
qx.$$packageData = {};
qx.$$g = {}

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:digitalproject.startup.qooxdoo.09fcfa2a6da4.js","qx:qx/Bootstrap.js","qx:qx/util/OOUtil.js","qx:qx/core/Environment.js","qx:qx/bom/client/EcmaScript.js","qx:qx/lang/normalize/Function.js","qx:qx/lang/normalize/Array.js","qx:qx/Mixin.js","qx:qx/core/Aspect.js","qx:qx/lang/normalize/String.js","qx:qx/lang/normalize/Object.js","qx:qx/Interface.js","qx:qx/lang/normalize/Error.js","qx:qx/lang/normalize/Date.js","qx:qx/core/Property.js","qx:qx/Class.js","qx:qx/data/MBinding.js","qx:qx/data/SingleValueBinding.js","qx:qx/lang/Type.js","qx:qx/core/Assert.js","qx:qx/type/BaseError.js","qx:qx/core/AssertionError.js","qx:qx/dev/StackTrace.js","qx:qx/lang/Array.js","qx:qx/bom/client/Engine.js","qx:qx/lang/Function.js","qx:qx/event/GlobalError.js","qx:qx/core/WindowError.js","qx:qx/core/GlobalError.js","qx:qx/core/ObjectRegistry.js","qx:qx/lang/Json.js","qx:qx/lang/String.js","qx:qx/data/IListData.js","qx:qx/core/ValidationError.js","qx:qx/util/RingBuffer.js","qx:qx/log/appender/RingBuffer.js","qx:qx/log/Logger.js","qx:qx/core/MLogging.js","qx:qx/dom/Node.js","qx:qx/bom/Event.js","qx:qx/bom/Style.js","qx:qx/bom/client/OperatingSystem.js","qx:qx/bom/client/Browser.js","qx:qx/bom/client/CssTransition.js","qx:qx/event/Manager.js","qx:qx/event/IEventHandler.js","qx:qx/event/Registration.js","qx:qx/core/MEvent.js","qx:qx/core/MProperty.js","qx:qx/core/MAssert.js","qx:qx/core/Object.js","qx:qx/util/DisposeUtil.js","qx:qx/event/handler/Object.js","qx:qx/event/IEventDispatcher.js","qx:qx/event/type/Event.js","qx:qx/util/ObjectPool.js","qx:qx/event/Pool.js","qx:qx/event/dispatch/Direct.js","qx:qx/event/type/Data.js","qx:qx/locale/MTranslation.js","qx:qx/application/IApplication.js","qx:qx/core/BaseInit.js","qx:qx/event/type/Native.js","qx:qx/event/handler/Window.js","qx:qx/event/handler/Application.js","qx:qx/core/Init.js","qx:qx/application/AbstractGui.js","qx:qx/theme/manager/Meta.js","qx:qx/util/ValueManager.js","qx:qx/theme/manager/Color.js","qx:qx/util/ColorUtil.js","qx:qx/theme/manager/Decoration.js","qx:qx/ui/style/Stylesheet.js","qx:qx/bom/Stylesheet.js","qx:qx/dom/Element.js","qx:qx/bom/client/Html.js","qx:qx/bom/element/Attribute.js","qx:qx/util/Uri.js","qx:qx/bom/client/Stylesheet.js","qx:qx/lang/Object.js","qx:qx/ui/decoration/MBackgroundColor.js","qx:qx/ui/decoration/IDecorator.js","qx:qx/ui/decoration/Abstract.js","qx:qx/ui/decoration/MBackgroundImage.js","qx:qx/util/AliasManager.js","qx:qx/bom/client/Transport.js","qx:qx/util/LibraryManager.js","qx:qx/util/ResourceManager.js","qx:qx/ui/decoration/MSingleBorder.js","qx:qx/ui/decoration/MDoubleBorder.js","qx:qx/bom/client/Css.js","qx:qx/ui/decoration/MBorderRadius.js","qx:qx/ui/decoration/MBorderImage.js","qx:qx/ui/decoration/MLinearBackgroundGradient.js","qx:qx/ui/decoration/MBoxShadow.js","qx:qx/ui/decoration/Decorator.js","qx:qx/theme/manager/Font.js","qx:qx/bom/Font.js","qx:qx/bom/webfonts/WebFont.js","qx:qx/bom/webfonts/Manager.js","qx:qx/event/Timer.js","qx:qx/bom/webfonts/Validator.js","qx:qx/bom/element/Dimension.js","qx:qx/dom/Hierarchy.js","qx:qx/bom/element/Opacity.js","qx:qx/bom/element/Cursor.js","qx:qx/bom/element/BoxSizing.js","qx:qx/bom/element/Clip.js","qx:qx/bom/element/Style.js","qx:qx/bom/Document.js","qx:qx/bom/Viewport.js","qx:qx/theme/manager/Icon.js","qx:qx/theme/manager/Appearance.js","qx:qx/Theme.js","qx:qx/ui/tooltip/Manager.js","qx:qx/ui/core/MLayoutHandling.js","qx:qx/ui/core/LayoutItem.js","qx:qx/util/PropertyUtil.js","qx:qx/ui/core/queue/Layout.js","qx:qx/type/BaseArray.js","qx:qxWeb.js","qx:qx/bom/Selector.js","qx:qx/bom/client/Device.js","qx:qx/bom/client/Event.js","qx:qx/module/Environment.js","qx:qx/module/Css.js","qx:qx/bom/element/Class.js","qx:qx/bom/element/Location.js","qx:qx/module/Polyfill.js","qx:qx/module/Event.js","qx:qx/module/event/PointerHandler.js","qx:qx/event/Emitter.js","qx:qx/event/handler/PointerCore.js","qx:qx/event/type/dom/Custom.js","qx:qx/event/type/dom/Pointer.js","qx:qx/module/Animation.js","qx:qx/bom/element/Animation.js","qx:qx/bom/client/CssAnimation.js","qx:qx/bom/element/AnimationCss.js","qx:qx/bom/element/AnimationHandle.js","qx:qx/bom/element/AnimationJs.js","qx:qx/bom/client/CssTransform.js","qx:qx/bom/element/Transform.js","qx:qx/bom/AnimationFrame.js","qx:qx/util/DeferredCallManager.js","qx:qx/util/DeferredCall.js","qx:qx/html/Element.js","qx:qx/event/handler/Appear.js","qx:qx/event/dispatch/AbstractBubbling.js","qx:qx/event/dispatch/DomBubbling.js","qx:qx/event/type/Dom.js","qx:qx/event/type/Mouse.js","qx:qx/event/type/Pointer.js","qx:qx/event/handler/Pointer.js","qx:qx/event/type/Tap.js","qx:qx/event/type/Track.js","qx:qx/event/type/Swipe.js","qx:qx/event/type/Rotate.js","qx:qx/event/type/Roll.js","qx:qx/event/type/Pinch.js","qx:qx/event/handler/GestureCore.js","qx:qx/util/Wheel.js","qx:qx/event/handler/Gesture.js","qx:qx/event/handler/Element.js","qx:qx/event/handler/UserAction.js","qx:qx/event/handler/Mouse.js","qx:qx/event/type/MouseWheel.js","qx:qx/event/handler/Keyboard.js","qx:qx/event/type/KeyInput.js","qx:qx/event/type/KeySequence.js","qx:qx/event/util/Keyboard.js","qx:qx/event/handler/Focus.js","qx:qx/bom/Selection.js","qx:qx/bom/Range.js","qx:qx/util/StringSplit.js","qx:qx/event/type/Focus.js","qx:qx/event/handler/TouchCore.js","qx:qx/event/handler/Orientation.js","qx:qx/event/type/Orientation.js","qx:qx/event/handler/Touch.js","qx:qx/event/type/Touch.js","qx:qx/event/handler/Input.js","qx:qx/event/handler/Offline.js","qx:qx/bom/Element.js","qx:qx/event/dispatch/MouseCapture.js","qx:qx/event/handler/Capture.js","qx:qx/bom/client/Plugin.js","qx:qx/xml/Document.js","qx:qx/bom/client/Xml.js","qx:qx/bom/element/Scroll.js","qx:qx/ui/core/queue/Manager.js","qx:qx/ui/core/queue/Widget.js","qx:qx/ui/core/queue/Visibility.js","qx:qx/ui/core/queue/Appearance.js","qx:qx/ui/core/queue/Dispose.js","qx:qx/ui/core/Widget.js","qx:qx/ui/core/EventHandler.js","qx:qx/event/handler/DragDrop.js","qx:qx/event/type/Drag.js","qx:qx/ui/core/MPlacement.js","qx:qx/event/Idle.js","qx:qx/util/placement/Placement.js","qx:qx/util/placement/AbstractAxis.js","qx:qx/util/placement/DirectAxis.js","qx:qx/util/placement/KeepAlignAxis.js","qx:qx/util/placement/BestFitAxis.js","qx:qx/ui/basic/Image.js","qx:qx/io/ImageLoader.js","qx:qx/html/Image.js","qx:qx/bom/element/Decoration.js","qx:qx/bom/element/Background.js","qx:qx/ui/core/DragDropCursor.js","qx:qx/ui/layout/Abstract.js","qx:qx/type/BaseString.js","qx:qx/locale/LocalizedString.js","qx:qx/locale/Manager.js","qx:qx/bom/client/Locale.js","qx:qx/ui/core/MChildrenHandling.js","qx:qx/ui/container/Composite.js","qx:qx/ui/popup/Popup.js","qx:qx/ui/popup/Manager.js","qx:qx/ui/tooltip/ToolTip.js","qx:qx/ui/layout/HBox.js","qx:qx/ui/layout/Util.js","qx:qx/ui/basic/Atom.js","qx:qx/ui/layout/Atom.js","qx:qx/ui/form/IStringForm.js","qx:qx/ui/basic/Label.js","qx:qx/html/Label.js","qx:qx/bom/Label.js","qx:qx/ui/form/IForm.js","qx:qx/application/Standalone.js","qx:qx/ui/window/MDesktop.js","qx:qx/ui/core/MBlocker.js","qx:qx/ui/core/Blocker.js","qx:qx/html/Blocker.js","qx:qx/ui/root/Abstract.js","qx:qx/ui/core/FocusHandler.js","qx:qx/ui/root/Application.js","qx:qx/ui/layout/Canvas.js","qx:qx/html/Root.js","org.jspresso.framework:org/jspresso/framework/application/frontend/Application.js","org.jspresso.framework:org/jspresso/framework/state/remote/IRemoteStateOwner.js","org.jspresso.framework:org/jspresso/framework/util/remote/IRemotePeer.js","qx:qx/data/marshal/MEventBubbling.js","org.jspresso.framework:org/jspresso/framework/util/remote/RemotePeer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RImageComponent.js","org.jspresso.framework:org/jspresso/framework/util/gui/Font.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTextComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTextField.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTree.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RDurationField.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteEnablementCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteFileCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteFileUploadCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RLabel.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteMessageCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteYesNoCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteYesNoCancelCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RContainer.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteActionCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTimeField.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteFileDownloadCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteOpenUrlCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RCheckBox.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RCardContainer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RBorderContainer.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteValueCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteAbstractDialogCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteDialogCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTextArea.js","org.jspresso.framework:org/jspresso/framework/gui/remote/REnumBox.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RComboBox.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteSortCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RPasswordField.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RIcon.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RNumericComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RDecimalComponent.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteCloseDialogCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteInitLoginCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteAddCardCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteChildrenCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RCollectionComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RList.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteLocaleCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RPercentField.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteReadabilityCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteInitCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RIntegerField.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RActionField.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RAction.js","org.jspresso.framework:org/jspresso/framework/util/gui/Dimension.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteWritabilityCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteRestartCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteOkCancelCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RSplitContainer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/REvenGridContainer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RForm.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RConstrainedGridContainer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTable.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteSelectionCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RDateField.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteWorkspaceDisplayCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RSecurityComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RColorField.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RDecimalField.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTabContainer.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteStartCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RActionList.js","org.jspresso.framework:org/jspresso/framework/util/gui/CellConstraints.js","qx:qx/ui/core/MExecutable.js","qx:qx/ui/command/Command.js","qx:qx/bom/Shortcut.js","qx:qx/locale/Key.js","qx:qx/ui/core/Command.js","qx:qx/ui/form/IRadioItem.js","qx:qx/ui/core/MSingleSelectionHandling.js","qx:qx/ui/core/SingleSelectionManager.js","qx:qx/ui/core/ISingleSelectionProvider.js","qx:qx/ui/form/MModelSelection.js","qx:qx/data/Array.js","qx:qx/ui/core/ISingleSelection.js","qx:qx/ui/form/IModelSelection.js","qx:qx/ui/form/RadioGroup.js","qx:qx/ui/form/IBooleanForm.js","qx:qx/ui/form/IExecutable.js","qx:qx/ui/form/ToggleButton.js","qx:qx/ui/form/MForm.js","qx:qx/ui/form/MModelProperty.js","qx:qx/ui/form/IModel.js","qx:qx/ui/form/CheckBox.js","qx:qx/theme/modern/Appearance.js","qx:qx/theme/classic/Appearance.js","qx:qx/log/appender/Util.js","qx:qx/log/appender/Native.js","qx:qx/log/appender/Console.js","collapsablepanel:collapsablepanel/theme/modern/Appearance.js","collapsablepanel:collapsablepanel/theme/classic/Appearance.js","org.jspresso.framework:org/jspresso/framework/patch/MCheckBox.js","org.jspresso.framework:org/jspresso/framework/patch/MArray.js","org.jspresso.framework:org/jspresso/framework/patch/MTransition.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/IRemoteCommandHandler.js","org.jspresso.framework:org/jspresso/framework/util/remote/registry/IRemotePeerRegistry.js","org.jspresso.framework:org/jspresso/framework/action/IActionHandler.js","org.jspresso.framework:org/jspresso/framework/application/frontend/controller/qx/AbstractQxController.js","org.jspresso.framework:org/jspresso/framework/util/remote/registry/BasicRemotePeerRegistry.js","org.jspresso.framework:org/jspresso/framework/state/remote/RemoteValueState.js","org.jspresso.framework:org/jspresso/framework/state/remote/RemoteCompositeValueState.js","org.jspresso.framework:org/jspresso/framework/util/object/ObjectUtil.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RActionEvent.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteRefreshCommand.js","org.jspresso.framework:org/jspresso/framework/state/remote/RemoteFormattedValueState.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteHistoryDisplayCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteCleanupCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteUpdateStatusCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteClipboardCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteFocusCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteEditCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/controller/qx/DefaultQxController.js","org.jspresso.framework:org/jspresso/framework/view/qx/AbstractQxViewFactory.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RActionComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RRadioBox.js","org.jspresso.framework:org/jspresso/framework/gui/remote/REmptyComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RMap.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RHtmlArea.js","qx:qx/util/format/IFormat.js","qx:qx/util/format/DateFormat.js","qx:qx/locale/Date.js","org.jspresso.framework:org/jspresso/framework/util/format/DateFormatDecorator.js","org.jspresso.framework:org/jspresso/framework/util/lang/DateDto.js","org.jspresso.framework:org/jspresso/framework/util/format/DateUtils.js","org.jspresso.framework:org/jspresso/framework/util/format/PasswordFormat.js","qx:qx/util/format/NumberFormat.js","qx:qx/locale/Number.js","org.jspresso.framework:org/jspresso/framework/util/format/ScaledNumberFormat.js","org.jspresso.framework:org/jspresso/framework/view/qx/DefaultQxViewFactory.js","qx:qx/data/controller/Object.js","qx:qx/ui/core/scroll/MRoll.js","qx:qx/ui/core/MDragDropScrolling.js","qx:qx/ui/core/DragDropScrolling.js","qx:qx/ui/core/scroll/MScrollBarFactory.js","qx:qx/ui/core/scroll/IScrollBar.js","qx:qx/ui/core/scroll/NativeScrollBar.js","qx:qx/ui/core/scroll/ScrollBar.js","qx:qx/ui/form/IRange.js","qx:qx/ui/form/INumberForm.js","qx:qx/ui/form/Slider.js","qx:qx/ui/core/scroll/ScrollSlider.js","qx:qx/ui/form/Button.js","qx:qx/ui/form/RepeatButton.js","qx:qx/event/AcceleratingTimer.js","qx:qx/ui/layout/VBox.js","qx:qx/ui/core/scroll/AbstractScrollArea.js","qx:qx/ui/layout/Grid.js","qx:qx/ui/core/scroll/ScrollPane.js","qx:qx/ui/layout/Grow.js","qx:qx/bom/client/Scroll.js","qx:qx/ui/core/MContentPadding.js","qx:qx/ui/container/Scroll.js","qx:qx/ui/layout/Dock.js","qx:qx/ui/form/AbstractField.js","qx:qx/html/Input.js","qx:qx/bom/Input.js","qx:qx/ui/form/RadioButtonGroup.js","qx:qx/ui/form/RadioButton.js","qx:qx/ui/form/TextArea.js","htmlarea:htmlarea/HtmlArea.js","htmlarea:htmlarea/bom/HtmlArea.js","qx:qx/event/handler/Iframe.js","qx:qx/bom/Iframe.js","htmlarea:htmlarea/bom/manager/Command.js","htmlarea:htmlarea/bom/manager/UndoRedo.js","qx:qx/ui/core/MRemoteChildrenHandling.js","qx:qx/ui/form/AbstractSelectBox.js","qx:qx/ui/core/selection/Abstract.js","qx:qx/ui/core/selection/Widget.js","qx:qx/ui/core/selection/ScrollArea.js","qx:qx/ui/core/MMultiSelectionHandling.js","qx:qx/ui/core/IMultiSelection.js","qx:qx/ui/form/List.js","qx:qx/bom/String.js","qx:qx/util/StringEscape.js","qx:qx/ui/form/SelectBox.js","qx:qx/ui/core/Spacer.js","qx:qx/ui/form/ListItem.js","qx:qx/ui/toolbar/ToolBar.js","qx:qx/ui/toolbar/Separator.js","qx:qx/ui/form/MenuButton.js","qx:qx/ui/menu/Manager.js","qx:qx/ui/menu/Menu.js","qx:qx/ui/menu/Layout.js","qx:qx/ui/menu/Separator.js","qx:qx/ui/menu/AbstractButton.js","qx:qx/ui/menu/ButtonLayout.js","qx:qx/ui/core/MRemoteLayoutHandling.js","qx:qx/ui/container/SlideBar.js","qx:qx/ui/menu/MenuSlideBar.js","qx:qx/ui/form/HoverButton.js","qx:qx/ui/menubar/Button.js","qx:qx/ui/menu/Button.js","qx:qx/ui/toolbar/Part.js","qx:qx/ui/toolbar/PartContainer.js","qx:qx/ui/toolbar/Button.js","qx:qx/ui/form/SplitButton.js","qx:qx/ui/table/Table.js","qx:qx/ui/table/IRowRenderer.js","qx:qx/ui/table/rowrenderer/Default.js","qx:qx/ui/table/IColumnMenuButton.js","qx:qx/ui/table/columnmenu/Button.js","qx:qx/ui/table/IColumnMenuItem.js","qx:qx/ui/menu/CheckBox.js","qx:qx/ui/table/columnmenu/MenuItem.js","qx:qx/ui/table/selection/Manager.js","qx:qx/ui/table/selection/Model.js","qx:qx/ui/table/ICellRenderer.js","qx:qx/ui/table/cellrenderer/Abstract.js","qx:qx/ui/table/cellrenderer/Default.js","qx:qx/ui/table/ICellEditorFactory.js","qx:qx/ui/table/celleditor/AbstractField.js","qx:qx/ui/table/celleditor/TextField.js","qx:qx/ui/form/TextField.js","qx:qx/ui/table/IHeaderRenderer.js","qx:qx/ui/table/headerrenderer/Default.js","qx:qx/ui/table/headerrenderer/HeaderCell.js","qx:qx/ui/table/columnmodel/Basic.js","qx:qx/ui/table/pane/Pane.js","qx:qx/ui/table/pane/Header.js","qx:qx/ui/table/pane/Scroller.js","qx:qx/ui/table/pane/FocusIndicator.js","qx:qx/ui/table/pane/Clipper.js","qx:qx/ui/table/pane/CellEvent.js","qx:qx/lang/Number.js","qx:qx/ui/window/IWindowManager.js","qx:qx/ui/window/IDesktop.js","qx:qx/ui/window/Manager.js","qx:qx/ui/core/MMovable.js","qx:qx/ui/core/MResizable.js","qx:qx/ui/window/Window.js","qx:qx/ui/table/pane/Model.js","qx:qx/ui/table/ITableModel.js","qx:qx/ui/table/model/Abstract.js","qx:qx/ui/table/model/Simple.js","qx:qx/ui/splitpane/Pane.js","qx:qx/ui/splitpane/Slider.js","qx:qx/ui/splitpane/Splitter.js","qx:qx/ui/splitpane/Blocker.js","qx:qx/ui/splitpane/VLayout.js","qx:qx/ui/splitpane/HLayout.js","qx:qx/ui/tabview/TabView.js","qx:qx/ui/container/Stack.js","qx:qx/ui/tabview/Page.js","qx:qx/ui/tabview/TabButton.js","collapsablepanel:collapsablepanel/Panel.js","org.jspresso.framework:org/jspresso/framework/view/qx/EnhancedCollapsiblePanel.js","qx:qx/ui/form/PasswordField.js","qx:qx/ui/form/IDateForm.js","qx:qx/ui/form/DateField.js","qx:qx/ui/control/DateChooser.js","org.jspresso.framework:org/jspresso/framework/view/qx/MapComponent.js","qx:qx/bom/request/Script.js","qx:qx/bom/GeoLocation.js","qx:qx/event/type/GeoPosition.js","qx:qx/ui/mobile/dialog/Manager.js","qx:qx/ui/mobile/core/MLayoutHandling.js","qx:qx/ui/mobile/core/MChildrenHandling.js","qx:qx/bom/Lifecycle.js","qx:qx/ui/mobile/core/Widget.js","qx:qx/ui/mobile/core/EventHandler.js","qx:qx/ui/mobile/core/DomUpdatedHandler.js","qx:qx/ui/mobile/layout/Abstract.js","qx:qx/ui/mobile/container/Composite.js","qx:qx/ui/mobile/layout/AbstractBox.js","qx:qx/ui/mobile/layout/VBox.js","qx:qx/ui/mobile/dialog/Popup.js","qx:qx/ui/mobile/core/Blocker.js","qx:qx/ui/mobile/basic/Atom.js","qx:qx/ui/mobile/layout/HBox.js","qx:qx/ui/mobile/basic/Image.js","qx:qx/ui/mobile/basic/Label.js","qx:qx/ui/mobile/dialog/BusyIndicator.js","qx:qx/ui/mobile/form/MText.js","qx:qx/ui/mobile/form/MValue.js","qx:qx/ui/mobile/form/MState.js","qx:qx/ui/mobile/container/MScrollHandling.js","qx:qx/ui/mobile/container/MIScroll.js","qx:qx/module/Manipulating.js","qx:qx/bom/Html.js","qx:qx/ui/mobile/container/MNativeScroll.js","qx:qx/ui/mobile/container/Scroll.js","qx:qx/ui/mobile/core/Root.js","qx:qx/ui/mobile/form/Input.js","qx:qx/ui/mobile/form/TextField.js","qx:qx/ui/mobile/form/NumberField.js","qx:qx/ui/mobile/form/Button.js","qx:qx/bom/client/PhoneGap.js","qx:qx/ui/tree/selection/SelectionManager.js","qx:qx/ui/tree/core/AbstractItem.js","qx:qx/ui/tree/core/FolderOpenButton.js","qx:qx/ui/tree/core/AbstractTreeItem.js","qx:qx/ui/tree/Tree.js","qx:qx/data/controller/MSelection.js","qx:qx/data/controller/ISelection.js","qx:qx/data/controller/Tree.js","qx:qx/ui/tree/TreeFolder.js","org.jspresso.framework:org/jspresso/framework/view/qx/RTableModel.js","org.jspresso.framework:org/jspresso/framework/util/html/HtmlUtil.js","org.jspresso.framework:org/jspresso/framework/view/qx/EnhancedTable.js","org.jspresso.framework:org/jspresso/framework/view/qx/RComponentTableCellEditor.js","qx:qx/util/TimerManager.js","org.jspresso.framework:org/jspresso/framework/view/qx/MCellAdditionalStyle.js","qx:qx/ui/table/cellrenderer/AbstractImage.js","qx:qx/ui/table/cellrenderer/Boolean.js","org.jspresso.framework:org/jspresso/framework/view/qx/BooleanTableCellRenderer.js","org.jspresso.framework:org/jspresso/framework/view/qx/ColorTableCellRenderer.js","org.jspresso.framework:org/jspresso/framework/view/qx/EnumerationTableCellRenderer.js","org.jspresso.framework:org/jspresso/framework/view/qx/BinaryTableCellRenderer.js","org.jspresso.framework:org/jspresso/framework/view/qx/ImageTableCellRenderer.js","org.jspresso.framework:org/jspresso/framework/view/qx/FormattedTableCellRenderer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RLink.js","org.jspresso.framework:org/jspresso/framework/view/qx/RComponentHeaderRenderer.js","org.jspresso.framework:org/jspresso/framework/view/qx/MultilineHeaderCell.js","qx:qx/ui/table/columnmodel/Resize.js","qx:qx/ui/core/ColumnData.js","qx:qx/ui/table/columnmodel/resizebehavior/Abstract.js","qx:qx/ui/table/columnmodel/resizebehavior/Default.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteTableChangedCommand.js","qx:qx/ui/form/IColorForm.js","qx:qx/ui/control/ColorPopup.js","qx:qx/ui/groupbox/GroupBox.js","qx:qx/ui/layout/Basic.js","qx:qx/ui/control/ColorSelector.js","qx:qx/ui/form/Spinner.js","qx:qx/data/controller/List.js","org.jspresso.framework:org/jspresso/framework/view/qx/EnhancedListDelegate.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteErrorMessageCommand.js","qx:qx/ui/menubar/MenuBar.js","uploadwidget:uploadwidget/UploadForm.js","uploadwidget:uploadwidget/UploadField.js","uploadwidget:uploadwidget/UploadButton.js","qx:qx/ui/embed/AbstractIframe.js","qx:qx/ui/embed/Iframe.js","qx:qx/html/Iframe.js","qx:qx/ui/embed/Flash.js","qx:qx/html/Flash.js","qx:qx/bom/Flash.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteFlashDisplayCommand.js","org.jspresso.framework:org/jspresso/framework/util/browser/ClipboardHelper.js","qx:qx/bom/History.js","qx:qx/bom/HashHistory.js","qx:qx/bom/IframeHistory.js","qx:qx/bom/NativeHistory.js","digitalproject:digitalproject/startup/qooxdoo/Application.js","qx:qx/io/remote/Rpc.js","qx:qx/io/remote/Request.js","qx:qx/io/remote/RequestQueue.js","qx:qx/io/remote/Exchange.js","qx:qx/io/remote/transport/Abstract.js","qx:qx/io/remote/transport/Script.js","qx:qx/io/remote/transport/Iframe.js","qx:qx/io/remote/transport/XmlHttp.js","qx:qx/io/remote/Response.js","qx:qx/theme/simple/Appearance.js","qx:qx/theme/simple/Image.js","org.jspresso.framework.theme:org/jspresso/framework/theme/Appearance.js","digitalproject:digitalproject/startup/qooxdoo/theme/Appearance.js","qx:qx/theme/simple/Decoration.js","org.jspresso.framework.theme:org/jspresso/framework/theme/Decoration.js","digitalproject:digitalproject/startup/qooxdoo/theme/Decoration.js","qx:qx/theme/icon/Tango.js","qx:qx/theme/simple/Font.js","org.jspresso.framework.theme:org/jspresso/framework/theme/Font.js","digitalproject:digitalproject/startup/qooxdoo/theme/Font.js","qx:qx/theme/simple/Color.js","org.jspresso.framework.theme:org/jspresso/framework/theme/Color.js","digitalproject:digitalproject/startup/qooxdoo/theme/Color.js","digitalproject:digitalproject/startup/qooxdoo/theme/Theme.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : false,
  addNoCacheParam : false,

  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;
  }
};

var readyStateValue = {"complete" : true};
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue["loaded"] = true;
}

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || readyStateValue[this.readyState]) {
      elem.onreadystatechange = elem.onload = null;
      if (typeof callback === "function") {
        callback();
      }
    }
  };

  if (isLoadParallel) {
    elem.async = null;
  }

  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);
var isLoadParallel = 'async' in document.createElement('script');

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }

  var item;

  if (isLoadParallel) {
    while (list.length) {
      item = list.shift();
      if (list.length) {
        loadScript(item);
      } else {
        loadScript(item, callback);
      }
    }
  } else {
    item = list.shift();
    loadScript(item,  function() {
      if (isWebkit) {
        // force async, else Safari fails with a "maximum recursion depth exceeded"
        window.setTimeout(function() {
          loadScriptList(list, callback);
        }, 0);
      } else {
        loadScriptList(list, callback);
      }
    });
  }
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

qx.$$loader.signalStartup = function ()
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true;
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

// Load all stuff
qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {
    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  }
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();



qx.$$loader.init();


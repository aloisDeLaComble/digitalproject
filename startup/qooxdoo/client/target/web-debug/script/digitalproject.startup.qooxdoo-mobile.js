(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"digitalproject.startup.qooxdoo.MobileApplication","qx.mobile.emulatetouch":false,"qx.mobile.nativescroll":true,"qx.revision":"","qx.theme":"","qx.version":"4.1"};
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
  packages : {"0":{"uris":["__out__:digitalproject.startup.qooxdoo-mobile.1e11e80b0ef6.js","qx:qx/Bootstrap.js","qx:qx/util/OOUtil.js","qx:qx/core/Environment.js","qx:qx/bom/client/EcmaScript.js","qx:qx/lang/normalize/Function.js","qx:qx/lang/normalize/Array.js","qx:qx/Mixin.js","qx:qx/core/Aspect.js","qx:qx/lang/normalize/String.js","qx:qx/lang/normalize/Object.js","qx:qx/Interface.js","qx:qx/lang/normalize/Error.js","qx:qx/lang/normalize/Date.js","qx:qx/core/Property.js","qx:qx/Class.js","qx:qx/data/MBinding.js","qx:qx/data/SingleValueBinding.js","qx:qx/lang/Type.js","qx:qx/core/Assert.js","qx:qx/type/BaseError.js","qx:qx/core/AssertionError.js","qx:qx/dev/StackTrace.js","qx:qx/lang/Array.js","qx:qx/bom/client/Engine.js","qx:qx/lang/Function.js","qx:qx/event/GlobalError.js","qx:qx/core/WindowError.js","qx:qx/core/GlobalError.js","qx:qx/core/ObjectRegistry.js","qx:qx/lang/Json.js","qx:qx/lang/String.js","qx:qx/data/IListData.js","qx:qx/core/ValidationError.js","qx:qx/util/RingBuffer.js","qx:qx/log/appender/RingBuffer.js","qx:qx/log/Logger.js","qx:qx/core/MLogging.js","qx:qx/dom/Node.js","qx:qx/bom/Event.js","qx:qx/bom/Style.js","qx:qx/bom/client/OperatingSystem.js","qx:qx/bom/client/Browser.js","qx:qx/bom/client/CssTransition.js","qx:qx/event/Manager.js","qx:qx/event/IEventHandler.js","qx:qx/event/Registration.js","qx:qx/core/MEvent.js","qx:qx/core/MProperty.js","qx:qx/core/MAssert.js","qx:qx/core/Object.js","qx:qx/util/DisposeUtil.js","qx:qx/event/handler/Object.js","qx:qx/event/IEventDispatcher.js","qx:qx/event/type/Event.js","qx:qx/util/ObjectPool.js","qx:qx/event/Pool.js","qx:qx/event/dispatch/Direct.js","qx:qx/event/type/Data.js","qx:qx/locale/MTranslation.js","qx:qx/application/IApplication.js","qx:qx/core/BaseInit.js","qx:qx/event/type/Native.js","qx:qx/event/handler/Window.js","qx:qx/event/handler/Application.js","qx:qx/core/Init.js","qx:qx/application/Mobile.js","qx:qx/application/Routing.js","qx:qx/event/Messaging.js","qx:qx/lang/Object.js","qx:qx/bom/client/Event.js","qx:qx/bom/History.js","qx:qx/bom/HashHistory.js","qx:qx/event/handler/Iframe.js","qx:qx/bom/Iframe.js","qx:qx/dom/Element.js","qx:qx/bom/client/Html.js","qx:qx/bom/element/Attribute.js","qx:qx/dom/Hierarchy.js","qx:qx/bom/client/Transport.js","qx:qx/util/LibraryManager.js","qx:qx/util/ResourceManager.js","qx:qx/event/Timer.js","qx:qx/event/Idle.js","qx:qx/bom/IframeHistory.js","qx:qx/bom/NativeHistory.js","qx:qx/ui/mobile/core/MLayoutHandling.js","qx:qx/ui/mobile/core/MChildrenHandling.js","qx:qx/bom/Lifecycle.js","qx:qx/ui/mobile/core/Widget.js","qx:qx/event/handler/PointerCore.js","qx:qx/event/Emitter.js","qx:qx/event/type/dom/Custom.js","qx:qx/event/type/dom/Pointer.js","qx:qx/bom/Viewport.js","qx:qx/bom/Document.js","qx:qx/bom/client/Device.js","qx:qx/event/dispatch/AbstractBubbling.js","qx:qx/event/dispatch/DomBubbling.js","qx:qx/event/type/Dom.js","qx:qx/event/type/Mouse.js","qx:qx/event/type/Pointer.js","qx:qx/event/handler/Pointer.js","qx:qx/event/handler/TouchCore.js","qx:qx/bom/element/Opacity.js","qx:qx/bom/element/Cursor.js","qx:qx/bom/element/BoxSizing.js","qx:qx/bom/element/Clip.js","qx:qx/bom/client/Css.js","qx:qx/bom/element/Style.js","qx:qx/event/type/Tap.js","qx:qx/event/type/Swipe.js","qx:qx/event/type/Rotate.js","qx:qx/event/type/Pinch.js","qx:qx/event/handler/Orientation.js","qx:qx/event/type/Orientation.js","qx:qx/event/type/Track.js","qx:qx/event/handler/UserAction.js","qx:qx/event/handler/Touch.js","qx:qx/event/type/Touch.js","qx:qx/ui/mobile/core/EventHandler.js","qx:qx/bom/element/Class.js","qx:qx/event/handler/GestureCore.js","qx:qx/type/BaseArray.js","qx:qxWeb.js","qx:qx/bom/Selector.js","qx:qx/bom/AnimationFrame.js","qx:qx/bom/Stylesheet.js","qx:qx/util/Uri.js","qx:qx/bom/client/Stylesheet.js","qx:qx/bom/client/CssAnimation.js","qx:qx/util/Wheel.js","qx:qx/event/handler/Appear.js","qx:qx/ui/mobile/core/DomUpdatedHandler.js","qx:qx/ui/mobile/layout/Abstract.js","qx:qx/bom/client/CssTransform.js","qx:qx/ui/mobile/container/Composite.js","qx:qx/ui/mobile/core/Root.js","qx:qx/ui/mobile/layout/AbstractBox.js","qx:qx/ui/mobile/layout/VBox.js","qx:qx/bom/element/Dimension.js","qx:qx/bom/client/Scroll.js","qx:qx/bom/element/Scroll.js","qx:qx/bom/element/Location.js","org.jspresso.framework:org/jspresso/framework/application/frontend/MobileApplication.js","org.jspresso.framework:org/jspresso/framework/state/remote/IRemoteStateOwner.js","org.jspresso.framework:org/jspresso/framework/util/remote/IRemotePeer.js","qx:qx/data/marshal/MEventBubbling.js","org.jspresso.framework:org/jspresso/framework/util/remote/RemotePeer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RContainer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RCardContainer.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteWorkspaceDisplayCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteFileCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteCloseDialogCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteMessageCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteYesNoCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RNumericComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RDecimalComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RCheckBox.js","org.jspresso.framework:org/jspresso/framework/util/gui/Font.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteYesNoCancelCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RSecurityComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTextComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTextField.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteReadabilityCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RPercentField.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteActionCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTree.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RLabel.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RImageComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobileImageComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTextArea.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteSelectionCommand.js","org.jspresso.framework:org/jspresso/framework/util/gui/Dimension.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteOpenUrlCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteInitCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RColorField.js","org.jspresso.framework:org/jspresso/framework/gui/remote/REvenGridContainer.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteValueCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RForm.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobileForm.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RDateField.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTabContainer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobileTabContainer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RConstrainedGridContainer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RCollectionComponent.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteChildrenCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RImageCanvas.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RList.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobileList.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RDurationField.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RActionField.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RAction.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteAbstractDialogCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteDialogCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteEnablementCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteInitLoginCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteSortCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/REnumBox.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RComboBox.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RIcon.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RDecimalField.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteAddCardCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobileTree.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RPasswordField.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RImagePicker.js","org.jspresso.framework:org/jspresso/framework/util/gui/CellConstraints.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteRestartCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RMap.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobileMap.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteFileUploadCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteLocaleCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteFileDownloadCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RActionList.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTable.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RBorderContainer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobileBorderContainer.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteWritabilityCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RTimeField.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteStartCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteOkCancelCommand.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RSplitContainer.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RIntegerField.js","qx:qx/ui/mobile/form/MState.js","qx:qx/ui/mobile/container/MScrollHandling.js","qx:qx/ui/mobile/container/MIScroll.js","qx:qx/bom/request/Script.js","qx:qx/module/Environment.js","qx:qx/module/Css.js","qx:qx/module/Polyfill.js","qx:qx/module/Event.js","qx:qx/module/event/PointerHandler.js","qx:qx/module/Animation.js","qx:qx/bom/element/Animation.js","qx:qx/bom/element/AnimationCss.js","qx:qx/bom/element/AnimationHandle.js","qx:qx/bom/element/AnimationJs.js","qx:qx/bom/element/Transform.js","qx:qx/util/ColorUtil.js","qx:qx/module/Manipulating.js","qx:qx/bom/Html.js","qx:qx/ui/mobile/container/MNativeScroll.js","qx:qx/ui/mobile/container/Scroll.js","qx:qx/ui/form/MForm.js","qx:qx/type/BaseString.js","qx:qx/locale/LocalizedString.js","qx:qx/locale/Manager.js","qx:qx/bom/client/Locale.js","qx:qx/ui/form/MModelProperty.js","qx:qx/ui/form/IForm.js","qx:qx/ui/form/IModel.js","qx:qx/ui/mobile/form/Input.js","qx:qx/ui/form/IStringForm.js","qx:qx/event/handler/Input.js","qx:qx/ui/mobile/form/MText.js","qx:qx/event/type/Roll.js","qx:qx/event/handler/Gesture.js","qx:qx/event/handler/Element.js","qx:qx/event/handler/Mouse.js","qx:qx/event/type/MouseWheel.js","qx:qx/event/handler/Keyboard.js","qx:qx/event/type/KeyInput.js","qx:qx/event/type/KeySequence.js","qx:qx/event/util/Keyboard.js","qx:qx/event/handler/Focus.js","qx:qx/bom/Selection.js","qx:qx/bom/Range.js","qx:qx/util/StringSplit.js","qx:qx/event/type/Focus.js","qx:qx/event/handler/Offline.js","qx:qx/bom/Element.js","qx:qx/event/dispatch/MouseCapture.js","qx:qx/event/handler/Capture.js","qx:qx/bom/client/Plugin.js","qx:qx/xml/Document.js","qx:qx/bom/client/Xml.js","qx:qx/ui/mobile/form/MValue.js","qx:qx/ui/mobile/form/TextField.js","qx:qx/ui/mobile/form/NumberField.js","qx:qx/data/Array.js","qx:qx/ui/mobile/layout/Card.js","qx:qx/event/handler/Transition.js","qx:qx/ui/mobile/layout/CardAnimation.js","qx:qx/util/Animation.js","qx:qx/ui/mobile/core/MResize.js","qx:qx/log/appender/Util.js","qx:qx/log/appender/Native.js","qx:qx/log/appender/Console.js","org.jspresso.framework:org/jspresso/framework/patch/MInput.js","org.jspresso.framework:org/jspresso/framework/patch/MArray.js","org.jspresso.framework:org/jspresso/framework/patch/MIScroll.js","qx:qx/event/message/Message.js","qx:qx/event/message/Bus.js","org.jspresso.framework:org/jspresso/framework/patch/MNativeScroll.js","org.jspresso.framework:org/jspresso/framework/patch/MCard.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/IRemoteCommandHandler.js","org.jspresso.framework:org/jspresso/framework/util/remote/registry/IRemotePeerRegistry.js","org.jspresso.framework:org/jspresso/framework/action/IActionHandler.js","org.jspresso.framework:org/jspresso/framework/application/frontend/controller/qx/AbstractQxController.js","org.jspresso.framework:org/jspresso/framework/util/remote/registry/BasicRemotePeerRegistry.js","org.jspresso.framework:org/jspresso/framework/state/remote/RemoteValueState.js","org.jspresso.framework:org/jspresso/framework/state/remote/RemoteCompositeValueState.js","org.jspresso.framework:org/jspresso/framework/util/object/ObjectUtil.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RActionEvent.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteRefreshCommand.js","org.jspresso.framework:org/jspresso/framework/state/remote/RemoteFormattedValueState.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteHistoryDisplayCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteCleanupCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteUpdateStatusCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteClipboardCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteFocusCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/RemoteEditCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/controller/qx/mobile/MobileQxController.js","qx:qx/ui/mobile/basic/Atom.js","qx:qx/ui/mobile/layout/HBox.js","qx:qx/ui/mobile/basic/Image.js","qx:qx/io/ImageLoader.js","qx:qx/ui/mobile/basic/Label.js","qx:qx/ui/mobile/dialog/BusyIndicator.js","qx:qx/ui/mobile/dialog/Popup.js","qx:qx/util/placement/Placement.js","qx:qx/util/placement/AbstractAxis.js","qx:qx/util/placement/DirectAxis.js","qx:qx/util/placement/KeepAlignAxis.js","qx:qx/util/placement/BestFitAxis.js","qx:qx/ui/mobile/core/Blocker.js","qx:qx/bom/client/PhoneGap.js","qx:qx/ui/mobile/page/Page.js","qx:qx/ui/mobile/container/INavigation.js","qx:qx/ui/mobile/page/NavigationPage.js","qx:qx/ui/mobile/navigationbar/Title.js","qx:qx/ui/mobile/form/Button.js","qx:qx/ui/mobile/navigationbar/Button.js","qx:qx/ui/mobile/navigationbar/BackButton.js","qx:qx/ui/mobile/page/Manager.js","qx:qx/ui/mobile/container/Drawer.js","qx:qx/ui/mobile/container/Navigation.js","qx:qx/ui/mobile/navigationbar/NavigationBar.js","org.jspresso.framework:org/jspresso/framework/application/frontend/controller/qx/mobile/EnhancedManager.js","org.jspresso.framework:org/jspresso/framework/view/qx/AbstractQxViewFactory.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RActionComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RRadioBox.js","org.jspresso.framework:org/jspresso/framework/gui/remote/REmptyComponent.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RHtmlArea.js","qx:qx/util/format/IFormat.js","qx:qx/util/format/DateFormat.js","qx:qx/locale/Date.js","org.jspresso.framework:org/jspresso/framework/util/format/DateFormatDecorator.js","org.jspresso.framework:org/jspresso/framework/util/lang/DateDto.js","org.jspresso.framework:org/jspresso/framework/util/format/DateUtils.js","org.jspresso.framework:org/jspresso/framework/util/format/PasswordFormat.js","qx:qx/util/format/NumberFormat.js","qx:qx/locale/Number.js","org.jspresso.framework:org/jspresso/framework/util/format/ScaledNumberFormat.js","org.jspresso.framework:org/jspresso/framework/view/qx/mobile/MobileQxViewFactory.js","qx:qx/ui/mobile/list/renderer/Abstract.js","qx:qx/ui/mobile/list/renderer/Default.js","org.jspresso.framework:org/jspresso/framework/view/qx/mobile/TreeItemRenderer.js","qx:qx/data/controller/Object.js","qx:qx/ui/mobile/toolbar/Button.js","qx:qx/ui/mobile/dialog/Menu.js","qx:qx/ui/mobile/list/List.js","qx:qx/ui/mobile/list/provider/Provider.js","qx:qx/util/Delegate.js","qx:qx/ui/mobile/list/renderer/group/Abstract.js","qx:qx/ui/mobile/list/renderer/group/Default.js","qx:qx/ui/mobile/toolbar/ToolBar.js","qx:qx/ui/mobile/toolbar/Separator.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobilePageAware.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobilePage.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobileCardPage.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobileNavPage.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobileCompositePage.js","org.jspresso.framework:org/jspresso/framework/gui/remote/mobile/RMobilePageAwareContainer.js","org.jspresso.framework:org/jspresso/framework/view/qx/mobile/NoScrollNavigationPage.js","qx:qx/ui/mobile/form/Row.js","qx:qx/ui/mobile/form/Label.js","qx:qx/ui/mobile/form/PasswordField.js","qx:qx/ui/mobile/form/SelectBox.js","qx:qx/ui/mobile/form/CheckBox.js","org.jspresso.framework:org/jspresso/framework/view/qx/mobile/MapNavigationPage.js","qx:qx/bom/GeoLocation.js","qx:qx/event/type/GeoPosition.js","qx:qx/ui/mobile/dialog/Manager.js","qx:qx/ui/mobile/tabbar/TabBar.js","qx:qx/ui/mobile/tabbar/TabButton.js","qx:qx/ui/mobile/container/Carousel.js","org.jspresso.framework:org/jspresso/framework/view/qx/mobile/EnhancedCarousel.js","org.jspresso.framework:org/jspresso/framework/gui/remote/RLink.js","qx:qx/ui/mobile/dialog/Picker.js","org.jspresso.framework:org/jspresso/framework/view/qx/mobile/DatePicker.js","org.jspresso.framework:org/jspresso/framework/util/format/StringUtils.js","org.jspresso.framework:org/jspresso/framework/view/qx/mobile/TimePicker.js","org.jspresso.framework:org/jspresso/framework/view/qx/mobile/SelectableListItemRenderer.js","org.jspresso.framework:org/jspresso/framework/view/qx/mobile/EnhancedList.js","qx:qx/ui/core/MSingleSelectionHandling.js","qx:qx/ui/core/SingleSelectionManager.js","qx:qx/ui/core/ISingleSelectionProvider.js","qx:qx/ui/form/MModelSelection.js","qx:qx/ui/core/ISingleSelection.js","qx:qx/ui/form/IModelSelection.js","qx:qx/ui/form/RadioGroup.js","qx:qx/ui/mobile/form/RadioGroup.js","qx:qx/ui/mobile/form/RadioButton.js","org.jspresso.framework:org/jspresso/framework/view/qx/mobile/ImagePicker.js","org.jspresso.framework:org/jspresso/framework/view/qx/mobile/ImageCanvas.js","qx:qx/ui/mobile/embed/Canvas.js","qx:qx/ui/mobile/form/TextArea.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/mobile/RemoteBackCommand.js","org.jspresso.framework:org/jspresso/framework/application/frontend/command/remote/mobile/RemoteAnimationCommand.js","org.jspresso.framework:org/jspresso/framework/view/qx/mobile/StandaloneNavigationPage.js","qx:qx/ui/mobile/embed/Html.js","digitalproject:digitalproject/startup/qooxdoo/MobileApplication.js","qx:qx/io/remote/Rpc.js","qx:qx/io/remote/Request.js","qx:qx/io/remote/RequestQueue.js","qx:qx/io/remote/Exchange.js","qx:qx/io/remote/transport/Abstract.js","qx:qx/io/remote/transport/Script.js","qx:qx/io/remote/transport/Iframe.js","qx:qx/io/remote/transport/XmlHttp.js","qx:qx/io/remote/Response.js"]}},
  urisBefore : [],
  cssBefore : ["file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/target/css/digitalproject/startup/qooxdoo/css/custom.css","file:////Users/aloisprieurdelacomble/Documents/workspace/digitalproject/startup/qooxdoo/client/src/main/resources/digitalproject/startup/qooxdoo/css/styles.css"],
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
  elem.type = "text/css";
  elem.href = uri;
  elem.onload = onLoadCss();
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function onLoadCss() {
  cssFilesToLoad = cssFilesToLoad - 1;
  if(cssFilesToLoad == 0) {
    setTimeout(initScripts,0);
  }
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

var cssFilesToLoad = 0;

qx.$$loader.init = function() {
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {

    cssFilesToLoad = l.cssBefore.length;

    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  } else {
    initScripts();
  }
}

// Init scripts...
function initScripts() {
  var l=qx.$$loader;
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


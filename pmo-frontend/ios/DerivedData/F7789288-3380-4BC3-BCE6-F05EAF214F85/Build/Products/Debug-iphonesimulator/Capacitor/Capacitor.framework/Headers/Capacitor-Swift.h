// Generated by Apple Swift version 5.3.2 (swiftlang-1200.0.45 clang-1200.0.32.28)
#ifndef CAPACITOR_SWIFT_H
#define CAPACITOR_SWIFT_H
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wgcc-compat"

#if !defined(__has_include)
# define __has_include(x) 0
#endif
#if !defined(__has_attribute)
# define __has_attribute(x) 0
#endif
#if !defined(__has_feature)
# define __has_feature(x) 0
#endif
#if !defined(__has_warning)
# define __has_warning(x) 0
#endif

#if __has_include(<swift/objc-prologue.h>)
# include <swift/objc-prologue.h>
#endif

#pragma clang diagnostic ignored "-Wauto-import"
#include <Foundation/Foundation.h>
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>

#if !defined(SWIFT_TYPEDEFS)
# define SWIFT_TYPEDEFS 1
# if __has_include(<uchar.h>)
#  include <uchar.h>
# elif !defined(__cplusplus)
typedef uint_least16_t char16_t;
typedef uint_least32_t char32_t;
# endif
typedef float swift_float2  __attribute__((__ext_vector_type__(2)));
typedef float swift_float3  __attribute__((__ext_vector_type__(3)));
typedef float swift_float4  __attribute__((__ext_vector_type__(4)));
typedef double swift_double2  __attribute__((__ext_vector_type__(2)));
typedef double swift_double3  __attribute__((__ext_vector_type__(3)));
typedef double swift_double4  __attribute__((__ext_vector_type__(4)));
typedef int swift_int2  __attribute__((__ext_vector_type__(2)));
typedef int swift_int3  __attribute__((__ext_vector_type__(3)));
typedef int swift_int4  __attribute__((__ext_vector_type__(4)));
typedef unsigned int swift_uint2  __attribute__((__ext_vector_type__(2)));
typedef unsigned int swift_uint3  __attribute__((__ext_vector_type__(3)));
typedef unsigned int swift_uint4  __attribute__((__ext_vector_type__(4)));
#endif

#if !defined(SWIFT_PASTE)
# define SWIFT_PASTE_HELPER(x, y) x##y
# define SWIFT_PASTE(x, y) SWIFT_PASTE_HELPER(x, y)
#endif
#if !defined(SWIFT_METATYPE)
# define SWIFT_METATYPE(X) Class
#endif
#if !defined(SWIFT_CLASS_PROPERTY)
# if __has_feature(objc_class_property)
#  define SWIFT_CLASS_PROPERTY(...) __VA_ARGS__
# else
#  define SWIFT_CLASS_PROPERTY(...)
# endif
#endif

#if __has_attribute(objc_runtime_name)
# define SWIFT_RUNTIME_NAME(X) __attribute__((objc_runtime_name(X)))
#else
# define SWIFT_RUNTIME_NAME(X)
#endif
#if __has_attribute(swift_name)
# define SWIFT_COMPILE_NAME(X) __attribute__((swift_name(X)))
#else
# define SWIFT_COMPILE_NAME(X)
#endif
#if __has_attribute(objc_method_family)
# define SWIFT_METHOD_FAMILY(X) __attribute__((objc_method_family(X)))
#else
# define SWIFT_METHOD_FAMILY(X)
#endif
#if __has_attribute(noescape)
# define SWIFT_NOESCAPE __attribute__((noescape))
#else
# define SWIFT_NOESCAPE
#endif
#if __has_attribute(ns_consumed)
# define SWIFT_RELEASES_ARGUMENT __attribute__((ns_consumed))
#else
# define SWIFT_RELEASES_ARGUMENT
#endif
#if __has_attribute(warn_unused_result)
# define SWIFT_WARN_UNUSED_RESULT __attribute__((warn_unused_result))
#else
# define SWIFT_WARN_UNUSED_RESULT
#endif
#if __has_attribute(noreturn)
# define SWIFT_NORETURN __attribute__((noreturn))
#else
# define SWIFT_NORETURN
#endif
#if !defined(SWIFT_CLASS_EXTRA)
# define SWIFT_CLASS_EXTRA
#endif
#if !defined(SWIFT_PROTOCOL_EXTRA)
# define SWIFT_PROTOCOL_EXTRA
#endif
#if !defined(SWIFT_ENUM_EXTRA)
# define SWIFT_ENUM_EXTRA
#endif
#if !defined(SWIFT_CLASS)
# if __has_attribute(objc_subclassing_restricted)
#  define SWIFT_CLASS(SWIFT_NAME) SWIFT_RUNTIME_NAME(SWIFT_NAME) __attribute__((objc_subclassing_restricted)) SWIFT_CLASS_EXTRA
#  define SWIFT_CLASS_NAMED(SWIFT_NAME) __attribute__((objc_subclassing_restricted)) SWIFT_COMPILE_NAME(SWIFT_NAME) SWIFT_CLASS_EXTRA
# else
#  define SWIFT_CLASS(SWIFT_NAME) SWIFT_RUNTIME_NAME(SWIFT_NAME) SWIFT_CLASS_EXTRA
#  define SWIFT_CLASS_NAMED(SWIFT_NAME) SWIFT_COMPILE_NAME(SWIFT_NAME) SWIFT_CLASS_EXTRA
# endif
#endif
#if !defined(SWIFT_RESILIENT_CLASS)
# if __has_attribute(objc_class_stub)
#  define SWIFT_RESILIENT_CLASS(SWIFT_NAME) SWIFT_CLASS(SWIFT_NAME) __attribute__((objc_class_stub))
#  define SWIFT_RESILIENT_CLASS_NAMED(SWIFT_NAME) __attribute__((objc_class_stub)) SWIFT_CLASS_NAMED(SWIFT_NAME)
# else
#  define SWIFT_RESILIENT_CLASS(SWIFT_NAME) SWIFT_CLASS(SWIFT_NAME)
#  define SWIFT_RESILIENT_CLASS_NAMED(SWIFT_NAME) SWIFT_CLASS_NAMED(SWIFT_NAME)
# endif
#endif

#if !defined(SWIFT_PROTOCOL)
# define SWIFT_PROTOCOL(SWIFT_NAME) SWIFT_RUNTIME_NAME(SWIFT_NAME) SWIFT_PROTOCOL_EXTRA
# define SWIFT_PROTOCOL_NAMED(SWIFT_NAME) SWIFT_COMPILE_NAME(SWIFT_NAME) SWIFT_PROTOCOL_EXTRA
#endif

#if !defined(SWIFT_EXTENSION)
# define SWIFT_EXTENSION(M) SWIFT_PASTE(M##_Swift_, __LINE__)
#endif

#if !defined(OBJC_DESIGNATED_INITIALIZER)
# if __has_attribute(objc_designated_initializer)
#  define OBJC_DESIGNATED_INITIALIZER __attribute__((objc_designated_initializer))
# else
#  define OBJC_DESIGNATED_INITIALIZER
# endif
#endif
#if !defined(SWIFT_ENUM_ATTR)
# if defined(__has_attribute) && __has_attribute(enum_extensibility)
#  define SWIFT_ENUM_ATTR(_extensibility) __attribute__((enum_extensibility(_extensibility)))
# else
#  define SWIFT_ENUM_ATTR(_extensibility)
# endif
#endif
#if !defined(SWIFT_ENUM)
# define SWIFT_ENUM(_type, _name, _extensibility) enum _name : _type _name; enum SWIFT_ENUM_ATTR(_extensibility) SWIFT_ENUM_EXTRA _name : _type
# if __has_feature(generalized_swift_name)
#  define SWIFT_ENUM_NAMED(_type, _name, SWIFT_NAME, _extensibility) enum _name : _type _name SWIFT_COMPILE_NAME(SWIFT_NAME); enum SWIFT_COMPILE_NAME(SWIFT_NAME) SWIFT_ENUM_ATTR(_extensibility) SWIFT_ENUM_EXTRA _name : _type
# else
#  define SWIFT_ENUM_NAMED(_type, _name, SWIFT_NAME, _extensibility) SWIFT_ENUM(_type, _name, _extensibility)
# endif
#endif
#if !defined(SWIFT_UNAVAILABLE)
# define SWIFT_UNAVAILABLE __attribute__((unavailable))
#endif
#if !defined(SWIFT_UNAVAILABLE_MSG)
# define SWIFT_UNAVAILABLE_MSG(msg) __attribute__((unavailable(msg)))
#endif
#if !defined(SWIFT_AVAILABILITY)
# define SWIFT_AVAILABILITY(plat, ...) __attribute__((availability(plat, __VA_ARGS__)))
#endif
#if !defined(SWIFT_WEAK_IMPORT)
# define SWIFT_WEAK_IMPORT __attribute__((weak_import))
#endif
#if !defined(SWIFT_DEPRECATED)
# define SWIFT_DEPRECATED __attribute__((deprecated))
#endif
#if !defined(SWIFT_DEPRECATED_MSG)
# define SWIFT_DEPRECATED_MSG(...) __attribute__((deprecated(__VA_ARGS__)))
#endif
#if __has_feature(attribute_diagnose_if_objc)
# define SWIFT_DEPRECATED_OBJC(Msg) __attribute__((diagnose_if(1, Msg, "warning")))
#else
# define SWIFT_DEPRECATED_OBJC(Msg) SWIFT_DEPRECATED_MSG(Msg)
#endif
#if !defined(IBSegueAction)
# define IBSegueAction
#endif
#if __has_feature(modules)
#if __has_warning("-Watimport-in-framework-header")
#pragma clang diagnostic ignored "-Watimport-in-framework-header"
#endif
@import Foundation;
@import ObjectiveC;
@import UIKit;
@import UserNotifications;
#endif

#import <Capacitor/Capacitor.h>

#pragma clang diagnostic ignored "-Wproperty-attribute-mismatch"
#pragma clang diagnostic ignored "-Wduplicate-method-arg"
#if __has_warning("-Wpragma-clang-attribute")
# pragma clang diagnostic ignored "-Wpragma-clang-attribute"
#endif
#pragma clang diagnostic ignored "-Wunknown-pragmas"
#pragma clang diagnostic ignored "-Wnullability"

#if __has_attribute(external_source_symbol)
# pragma push_macro("any")
# undef any
# pragma clang attribute push(__attribute__((external_source_symbol(language="Swift", defined_in="Capacitor",generated_declaration))), apply_to=any(function,enum,objc_interface,objc_category,objc_protocol))
# pragma pop_macro("any")
#endif

@class UIApplication;
@class NSUserActivity;
@protocol UIUserActivityRestoring;

SWIFT_CLASS_NAMED("ApplicationDelegateProxy")
@interface CAPApplicationDelegateProxy : NSObject <UIApplicationDelegate>
- (BOOL)application:(UIApplication * _Nonnull)app openURL:(NSURL * _Nonnull)url options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> * _Nonnull)options SWIFT_WARN_UNUSED_RESULT;
- (BOOL)application:(UIApplication * _Nonnull)application continueUserActivity:(NSUserActivity * _Nonnull)userActivity restorationHandler:(void (^ _Nonnull)(NSArray<id <UIUserActivityRestoring>> * _Nullable))restorationHandler SWIFT_WARN_UNUSED_RESULT;
- (nonnull instancetype)init OBJC_DESIGNATED_INITIALIZER;
@end


SWIFT_CLASS("_TtC9Capacitor9CAPBridge") SWIFT_DEPRECATED_MSG("'statusBarTappedNotification' has been moved to Notification.Name.capacitorStatusBarTapped. 'getLastUrl' and application delegate methods have been moved to ApplicationDelegateProxy.")
@interface CAPBridge : NSObject
SWIFT_CLASS_PROPERTY(@property (nonatomic, class, readonly, copy) NSNotification * _Nonnull statusBarTappedNotification;)
+ (NSNotification * _Nonnull)statusBarTappedNotification SWIFT_WARN_UNUSED_RESULT;
- (nonnull instancetype)init OBJC_DESIGNATED_INITIALIZER;
@end

@class UIViewController;
@class CAPInstanceConfiguration;
@class WKWebView;
@class CAPNotificationRouter;
@class CAPPluginCall;
@class CAPPlugin;

SWIFT_PROTOCOL("_TtP9Capacitor17CAPBridgeProtocol_")
@protocol CAPBridgeProtocol <NSObject>
@property (nonatomic, readonly, strong) UIViewController * _Nullable viewController;
@property (nonatomic, readonly, strong) CAPInstanceConfiguration * _Nonnull config;
@property (nonatomic, readonly, strong) WKWebView * _Nullable webView;
@property (nonatomic, readonly, strong) CAPNotificationRouter * _Nonnull notificationRouter;
@property (nonatomic, readonly) BOOL isSimEnvironment;
@property (nonatomic, readonly) BOOL isDevEnvironment;
@property (nonatomic, readonly) UIUserInterfaceStyle userInterfaceStyle;
@property (nonatomic) BOOL statusBarVisible;
@property (nonatomic) UIStatusBarStyle statusBarStyle;
@property (nonatomic) UIStatusBarAnimation statusBarAnimation;
- (WKWebView * _Nullable)getWebView SWIFT_WARN_UNUSED_RESULT SWIFT_DEPRECATED_MSG("", "webView");
- (BOOL)isSimulator SWIFT_WARN_UNUSED_RESULT SWIFT_DEPRECATED_MSG("", "isSimEnvironment");
- (BOOL)isDevMode SWIFT_WARN_UNUSED_RESULT SWIFT_DEPRECATED_MSG("", "isDevEnvironment");
- (BOOL)getStatusBarVisible SWIFT_WARN_UNUSED_RESULT SWIFT_DEPRECATED_MSG("", "statusBarVisible");
- (UIStatusBarStyle)getStatusBarStyle SWIFT_WARN_UNUSED_RESULT SWIFT_DEPRECATED_MSG("", "statusBarStyle");
- (UIUserInterfaceStyle)getUserInterfaceStyle SWIFT_WARN_UNUSED_RESULT SWIFT_DEPRECATED_MSG("", "userInterfaceStyle");
- (NSString * _Nonnull)getLocalUrl SWIFT_WARN_UNUSED_RESULT SWIFT_DEPRECATED_MSG("Moved - equivalent is found on config.localURL");
- (CAPPluginCall * _Nullable)getSavedCall:(NSString * _Nonnull)callbackId SWIFT_WARN_UNUSED_RESULT SWIFT_DEPRECATED_MSG("", "savedCallWithID:");
- (void)releaseCallWithCallbackId:(NSString * _Nonnull)callbackId SWIFT_DEPRECATED_MSG("", "releaseCallWithID:");
- (CAPPlugin * _Nullable)pluginWithName:(NSString * _Nonnull)withName SWIFT_WARN_UNUSED_RESULT;
- (void)saveCall:(CAPPluginCall * _Nonnull)call;
- (CAPPluginCall * _Nullable)savedCallWithID:(NSString * _Nonnull)withID SWIFT_WARN_UNUSED_RESULT;
- (void)releaseCall:(CAPPluginCall * _Nonnull)call;
- (void)releaseCallWithID:(NSString * _Nonnull)withID;
- (void)evalWithPlugin:(CAPPlugin * _Nonnull)plugin js:(NSString * _Nonnull)js;
- (void)evalWithJs:(NSString * _Nonnull)js;
- (void)triggerJSEventWithEventName:(NSString * _Nonnull)eventName target:(NSString * _Nonnull)target;
- (void)triggerJSEventWithEventName:(NSString * _Nonnull)eventName target:(NSString * _Nonnull)target data:(NSString * _Nonnull)data;
- (void)triggerWindowJSEventWithEventName:(NSString * _Nonnull)eventName;
- (void)triggerWindowJSEventWithEventName:(NSString * _Nonnull)eventName data:(NSString * _Nonnull)data;
- (void)triggerDocumentJSEventWithEventName:(NSString * _Nonnull)eventName;
- (void)triggerDocumentJSEventWithEventName:(NSString * _Nonnull)eventName data:(NSString * _Nonnull)data;
- (NSURL * _Nullable)localURLFromWebURL:(NSURL * _Nullable)webURL SWIFT_WARN_UNUSED_RESULT;
- (NSURL * _Nullable)portablePathFromLocalURL:(NSURL * _Nullable)localURL SWIFT_WARN_UNUSED_RESULT;
- (void)showAlertWithTitle:(NSString * _Nonnull)title message:(NSString * _Nonnull)message buttonTitle:(NSString * _Nonnull)buttonTitle;
- (void)presentVC:(UIViewController * _Nonnull)viewControllerToPresent animated:(BOOL)flag completion:(void (^ _Nullable)(void))completion;
- (void)dismissVCWithAnimated:(BOOL)flag completion:(void (^ _Nullable)(void))completion;
@end

@class NSBundle;
@class NSCoder;

SWIFT_CLASS("_TtC9Capacitor23CAPBridgeViewController")
@interface CAPBridgeViewController : UIViewController
@property (nonatomic, copy) NSArray<NSNumber *> * _Nonnull supportedOrientations;
- (void)loadView;
- (void)viewDidLoad;
- (BOOL)canPerformUnwindSegueAction:(SEL _Nonnull)action fromViewController:(UIViewController * _Nonnull)fromViewController withSender:(id _Nonnull)sender SWIFT_WARN_UNUSED_RESULT;
@property (nonatomic, readonly) BOOL prefersStatusBarHidden;
@property (nonatomic, readonly) UIStatusBarStyle preferredStatusBarStyle;
@property (nonatomic, readonly) UIStatusBarAnimation preferredStatusBarUpdateAnimation;
@property (nonatomic, readonly) UIInterfaceOrientationMask supportedInterfaceOrientations;
- (nonnull instancetype)initWithNibName:(NSString * _Nullable)nibNameOrNil bundle:(NSBundle * _Nullable)nibBundleOrNil OBJC_DESIGNATED_INITIALIZER;
- (nullable instancetype)initWithCoder:(NSCoder * _Nonnull)coder OBJC_DESIGNATED_INITIALIZER;
@end


@interface CAPBridgeViewController (SWIFT_EXTENSION(Capacitor))
- (NSString * _Nonnull)getServerBasePath SWIFT_WARN_UNUSED_RESULT;
- (void)setServerBasePathWithPath:(NSString * _Nonnull)path;
@end




SWIFT_CLASS_NAMED("CAPConsolePlugin")
@interface CAPConsolePlugin : CAPPlugin
- (void)log:(CAPPluginCall * _Nonnull)call;
- (nonnull instancetype)initWithBridge:(id <CAPBridgeProtocol> _Nonnull)bridge pluginId:(NSString * _Nonnull)pluginId pluginName:(NSString * _Nonnull)pluginName OBJC_DESIGNATED_INITIALIZER;
- (nonnull instancetype)init OBJC_DESIGNATED_INITIALIZER;
@end


/// CAPFileManager helps map file schemes to physical files, whether they are on
/// disk, in a bundle, or in another location.
SWIFT_CLASS("_TtC9Capacitor14CAPFileManager")
@interface CAPFileManager : NSObject
- (nonnull instancetype)init OBJC_DESIGNATED_INITIALIZER;
@end

/// Deprecated, will be removed
typedef SWIFT_ENUM(NSInteger, CAPNotifications, closed) {
  CAPNotificationsURLOpen = 0,
  CAPNotificationsUniversalLinkOpen = 1,
  CAPNotificationsContinueActivity = 2,
  CAPNotificationsDidRegisterForRemoteNotificationsWithDeviceToken = 3,
  CAPNotificationsDidFailToRegisterForRemoteNotificationsWithError = 4,
  CAPNotificationsDecidePolicyForNavigationAction = 5,
};


@class NSDictionary;
@class NSISO8601DateFormatter;

@interface CAPPluginCall (SWIFT_EXTENSION(Capacitor))
@property (nonatomic, readonly, strong) NSDictionary * _Nonnull dictionaryRepresentation;
SWIFT_CLASS_PROPERTY(@property (nonatomic, class, strong) NSISO8601DateFormatter * _Nonnull jsDateFormatter;)
+ (NSISO8601DateFormatter * _Nonnull)jsDateFormatter SWIFT_WARN_UNUSED_RESULT;
+ (void)setJsDateFormatter:(NSISO8601DateFormatter * _Nonnull)value;
@end


@interface CAPPluginCall (SWIFT_EXTENSION(Capacitor))
- (BOOL)hasOption:(NSString * _Nonnull)key SWIFT_WARN_UNUSED_RESULT SWIFT_DEPRECATED_MSG("Presence of a key should not be considered significant. Use typed accessors to check the value instead.");
- (void)success SWIFT_DEPRECATED_MSG("", "resolve");
- (void)success:(NSDictionary<NSString *, id> * _Nonnull)data SWIFT_DEPRECATED_MSG("", "resolve:");
- (void)resolve;
- (void)resolve:(NSDictionary<NSString *, id> * _Nonnull)data;
- (void)error:(NSString * _Nonnull)message :(NSError * _Nullable)error :(NSDictionary<NSString *, id> * _Nonnull)data SWIFT_DEPRECATED_MSG("", "reject::::");
- (void)reject:(NSString * _Nonnull)message :(NSString * _Nullable)code :(NSError * _Nullable)error :(NSDictionary<NSString *, id> * _Nonnull)data;
- (void)unimplemented;
- (void)unimplemented:(NSString * _Nonnull)message;
- (void)unavailable;
- (void)unavailable:(NSString * _Nonnull)message;
@end


SWIFT_CLASS("_TtC9Capacitor18CAPPluginCallError")
@interface CAPPluginCallError : NSObject
@property (nonatomic, readonly, copy) NSString * _Nonnull message;
@property (nonatomic, readonly, copy) NSString * _Nullable code;
@property (nonatomic, readonly) NSError * _Nullable error;
@property (nonatomic, readonly, copy) NSDictionary<NSString *, id> * _Nullable data;
- (nonnull instancetype)init:(NSString * _Nonnull)message code:(NSString * _Nullable)code error:(NSError * _Nullable)error data:(NSDictionary<NSString *, id> * _Nullable)data OBJC_DESIGNATED_INITIALIZER;
- (nonnull instancetype)init SWIFT_UNAVAILABLE;
+ (nonnull instancetype)new SWIFT_UNAVAILABLE_MSG("-init is unavailable");
@end


SWIFT_CLASS("_TtC9Capacitor19CAPPluginCallResult")
@interface CAPPluginCallResult : NSObject
@property (nonatomic, readonly, copy) NSDictionary<NSString *, id> * _Nullable data;
- (nonnull instancetype)init:(NSDictionary<NSString *, id> * _Nullable)data OBJC_DESIGNATED_INITIALIZER;
- (nonnull instancetype)init SWIFT_UNAVAILABLE;
+ (nonnull instancetype)new SWIFT_UNAVAILABLE_MSG("-init is unavailable");
@end


SWIFT_CLASS_NAMED("CAPWebViewPlugin")
@interface CAPWebViewPlugin : CAPPlugin
- (nonnull instancetype)initWithBridge:(id <CAPBridgeProtocol> _Nonnull)bridge pluginId:(NSString * _Nonnull)pluginId pluginName:(NSString * _Nonnull)pluginName OBJC_DESIGNATED_INITIALIZER;
- (nonnull instancetype)init OBJC_DESIGNATED_INITIALIZER;
@end


@interface CAPInstanceConfiguration (SWIFT_EXTENSION(Capacitor))
- (id _Nullable)getPluginConfigValue:(NSString * _Nonnull)pluginId :(NSString * _Nonnull)configKey SWIFT_WARN_UNUSED_RESULT;
- (BOOL)shouldAllowNavigationTo:(NSString * _Nonnull)host SWIFT_WARN_UNUSED_RESULT;
- (id _Nullable)getValue:(NSString * _Nonnull)key SWIFT_WARN_UNUSED_RESULT SWIFT_DEPRECATED_MSG("Use direct property accessors");
- (NSString * _Nullable)getString:(NSString * _Nonnull)key SWIFT_WARN_UNUSED_RESULT SWIFT_DEPRECATED_MSG("Use direct property accessors");
@end



@interface CAPInstanceDescriptor (SWIFT_EXTENSION(Capacitor))
@property (nonatomic, readonly) BOOL cordovaDeployDisabled;
- (void)normalize;
@end


@interface NSNotification (SWIFT_EXTENSION(Capacitor))
SWIFT_CLASS_PROPERTY(@property (nonatomic, class, readonly) NSNotificationName _Nonnull capacitorOpenURL;)
+ (NSNotificationName _Nonnull)capacitorOpenURL SWIFT_WARN_UNUSED_RESULT;
SWIFT_CLASS_PROPERTY(@property (nonatomic, class, readonly) NSNotificationName _Nonnull capacitorOpenUniversalLink;)
+ (NSNotificationName _Nonnull)capacitorOpenUniversalLink SWIFT_WARN_UNUSED_RESULT;
SWIFT_CLASS_PROPERTY(@property (nonatomic, class, readonly) NSNotificationName _Nonnull capacitorContinueActivity;)
+ (NSNotificationName _Nonnull)capacitorContinueActivity SWIFT_WARN_UNUSED_RESULT;
SWIFT_CLASS_PROPERTY(@property (nonatomic, class, readonly) NSNotificationName _Nonnull capacitorDidRegisterForRemoteNotifications;)
+ (NSNotificationName _Nonnull)capacitorDidRegisterForRemoteNotifications SWIFT_WARN_UNUSED_RESULT;
SWIFT_CLASS_PROPERTY(@property (nonatomic, class, readonly) NSNotificationName _Nonnull capacitorDidFailToRegisterForRemoteNotifications;)
+ (NSNotificationName _Nonnull)capacitorDidFailToRegisterForRemoteNotifications SWIFT_WARN_UNUSED_RESULT;
SWIFT_CLASS_PROPERTY(@property (nonatomic, class, readonly) NSNotificationName _Nonnull capacitorDecidePolicyForNavigationAction;)
+ (NSNotificationName _Nonnull)capacitorDecidePolicyForNavigationAction SWIFT_WARN_UNUSED_RESULT;
SWIFT_CLASS_PROPERTY(@property (nonatomic, class, readonly) NSNotificationName _Nonnull capacitorStatusBarTapped;)
+ (NSNotificationName _Nonnull)capacitorStatusBarTapped SWIFT_WARN_UNUSED_RESULT;
@end



@class UNNotification;
@class UNNotificationResponse;

SWIFT_PROTOCOL_NAMED("NotificationHandlerProtocol")
@protocol CAPNotificationHandlerProtocol
- (UNNotificationPresentationOptions)willPresentWithNotification:(UNNotification * _Nonnull)notification SWIFT_WARN_UNUSED_RESULT;
- (void)didReceiveWithResponse:(UNNotificationResponse * _Nonnull)response;
@end

@class UNUserNotificationCenter;

SWIFT_CLASS_NAMED("NotificationRouter")
@interface CAPNotificationRouter : NSObject <UNUserNotificationCenterDelegate>
- (void)userNotificationCenter:(UNUserNotificationCenter * _Nonnull)center willPresentNotification:(UNNotification * _Nonnull)notification withCompletionHandler:(void (^ _Nonnull)(UNNotificationPresentationOptions))completionHandler;
- (void)userNotificationCenter:(UNUserNotificationCenter * _Nonnull)center didReceiveNotificationResponse:(UNNotificationResponse * _Nonnull)response withCompletionHandler:(void (^ _Nonnull)(void))completionHandler;
- (nonnull instancetype)init OBJC_DESIGNATED_INITIALIZER;
@end




#if __has_attribute(external_source_symbol)
# pragma clang attribute pop
#endif
#pragma clang diagnostic pop
#endif

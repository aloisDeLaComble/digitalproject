@REM ----------------------------------------------------------------------------
@REM  Copyright 2001-2006 The Apache Software Foundation.
@REM
@REM  Licensed under the Apache License, Version 2.0 (the "License");
@REM  you may not use this file except in compliance with the License.
@REM  You may obtain a copy of the License at
@REM
@REM       http://www.apache.org/licenses/LICENSE-2.0
@REM
@REM  Unless required by applicable law or agreed to in writing, software
@REM  distributed under the License is distributed on an "AS IS" BASIS,
@REM  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@REM  See the License for the specific language governing permissions and
@REM  limitations under the License.
@REM ----------------------------------------------------------------------------
@REM
@REM   Copyright (c) 2001-2006 The Apache Software Foundation.  All rights
@REM   reserved.

@echo off

set ERROR_CODE=0

:init
@REM Decide how to startup depending on the version of windows

@REM -- Win98ME
if NOT "%OS%"=="Windows_NT" goto Win9xArg

@REM set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" @setlocal

@REM -- 4NT shell
if "%eval[2+2]" == "4" goto 4NTArgs

@REM -- Regular WinNT shell
set CMD_LINE_ARGS=%*
goto WinNTGetScriptDir

@REM The 4NT Shell from jp software
:4NTArgs
set CMD_LINE_ARGS=%$
goto WinNTGetScriptDir

:Win9xArg
@REM Slurp the command line arguments.  This loop allows for an unlimited number
@REM of arguments (up to the command line limit, anyway).
set CMD_LINE_ARGS=
:Win9xApp
if %1a==a goto Win9xGetScriptDir
set CMD_LINE_ARGS=%CMD_LINE_ARGS% %1
shift
goto Win9xApp

:Win9xGetScriptDir
set SAVEDIR=%CD%
%0\
cd %0\..\.. 
set BASEDIR=%CD%
cd %SAVEDIR%
set SAVE_DIR=
goto repoSetup

:WinNTGetScriptDir
set BASEDIR=%~dp0\..

:repoSetup
set REPO=


if "%JAVACMD%"=="" set JAVACMD=java

if "%REPO%"=="" set REPO=%BASEDIR%\lib

set CLASSPATH="%REPO%"\digitalproject-core-1.0-SNAPSHOT.jar;"%REPO%"\jspresso-app-template-core-4.1.4.jar;"%REPO%"\jspresso-hibernate-4.1.4.jar;"%REPO%"\jspresso-model-4.1.4.jar;"%REPO%"\commons-beanutils-1.9.1.jar;"%REPO%"\spring-context-4.0.7.RELEASE.jar;"%REPO%"\spring-aop-4.0.7.RELEASE.jar;"%REPO%"\aopalliance-1.0.jar;"%REPO%"\jspresso-mongo-4.1.4.jar;"%REPO%"\spring-data-mongodb-1.5.4.RELEASE.jar;"%REPO%"\spring-expression-3.2.10.RELEASE.jar;"%REPO%"\mongo-java-driver-2.12.1.jar;"%REPO%"\jcl-over-slf4j-1.7.7.jar;"%REPO%"\jspresso-fusioncharts-4.1.4.jar;"%REPO%"\fusioncharts-free-2.2.jar;"%REPO%"\jspresso-jasper-core-4.1.4.jar;"%REPO%"\jasperreports-5.1.2.jar;"%REPO%"\commons-digester-2.1.jar;"%REPO%"\jcommon-1.0.15.jar;"%REPO%"\jfreechart-1.0.13.jar;"%REPO%"\jdtcore-3.1.0.jar;"%REPO%"\castor-1.2.jar;"%REPO%"\jackson-core-2.0.5.jar;"%REPO%"\jackson-databind-2.0.5.jar;"%REPO%"\jackson-annotations-2.0.5.jar;"%REPO%"\itext-4.2.1.jar;"%REPO%"\bctsp-jdk14-1.38.jar;"%REPO%"\bcprov-jdk14-1.38.jar;"%REPO%"\bcmail-jdk14-1.38.jar;"%REPO%"\pdf-renderer-1.0.5.jar;"%REPO%"\jspresso-app-launch-core-4.1.4.jar;"%REPO%"\jspresso-util-4.1.4.jar;"%REPO%"\slf4j-api-1.7.6.jar;"%REPO%"\jspresso-app-template-swing-4.1.4.jar;"%REPO%"\jspresso-jasper-swing-4.1.4.jar;"%REPO%"\jspresso-swing-application-4.1.4.jar;"%REPO%"\jspresso-binding-4.1.4.jar;"%REPO%"\jspresso-security-4.1.4.jar;"%REPO%"\jbosssx-4.0.20.Final.jar;"%REPO%"\picketbox-spi-bare-4.0.20.Final.jar;"%REPO%"\jboss-jaspi-api_1.1_spec-1.0.0.Beta1.jar;"%REPO%"\common-spi-4.0.20.Final.jar;"%REPO%"\identity-spi-4.0.20.Final.jar;"%REPO%"\authorization-spi-4.0.20.Final.jar;"%REPO%"\servlet-api-2.5.jar;"%REPO%"\trove4j-3.0.3.jar;"%REPO%"\jspresso-view-4.1.4.jar;"%REPO%"\jspresso-action-4.1.4.jar;"%REPO%"\joda-time-2.3.jar;"%REPO%"\substance-4.3.jar;"%REPO%"\dj-swingsuite-0.9.1.jar;"%REPO%"\javaxt-core-1.6.2.jar;"%REPO%"\openmap-5.0.3.jar;"%REPO%"\xtiff-jai-beta-0.3.jar;"%REPO%"\jspresso-app-launch-swing-4.1.4.jar;"%REPO%"\jspresso-swing-components-4.1.4.jar;"%REPO%"\nachocalendar-0.23.jar;"%REPO%"\jedit-syntax-2.2.2.jar;"%REPO%"\slf4j-log4j12-1.7.6.jar;"%REPO%"\log4j-1.2.17.jar;"%REPO%"\commons-cli-1.2.jar;"%REPO%"\dj-nativeswing-1.0.2.20120308.jar;"%REPO%"\dj-nativeswing-swt-1.0.2.20120308.jar;"%REPO%"\swt-3.7.2.jar;"%REPO%"\org.eclipse.swt.cocoa.macosx.x86_64-3.7.2.jar;"%REPO%"\hibernate-ehcache-4.3.4.Final.jar;"%REPO%"\jboss-logging-3.1.3.GA.jar;"%REPO%"\jboss-logging-annotations-1.2.0.Beta1.jar;"%REPO%"\hibernate-core-4.3.4.Final.jar;"%REPO%"\jboss-transaction-api_1.2_spec-1.0.0.Final.jar;"%REPO%"\dom4j-1.6.1.jar;"%REPO%"\xml-apis-1.0.b2.jar;"%REPO%"\hibernate-commons-annotations-4.0.4.Final.jar;"%REPO%"\hibernate-jpa-2.1-api-1.0.0.Final.jar;"%REPO%"\javassist-3.18.1-GA.jar;"%REPO%"\antlr-2.7.7.jar;"%REPO%"\jandex-1.1.0.Final.jar;"%REPO%"\ehcache-core-2.4.3.jar;"%REPO%"\commons-collections-3.2.1.jar;"%REPO%"\commons-dbcp2-2.1.jar;"%REPO%"\commons-pool2-2.3.jar;"%REPO%"\commons-logging-1.1.3.jar;"%REPO%"\hsqldb-2.3.2.jar;"%REPO%"\jspresso-application-4.1.4.jar;"%REPO%"\commons-fileupload-1.3.1.jar;"%REPO%"\commons-io-2.4.jar;"%REPO%"\commons-codec-1.9.jar;"%REPO%"\spring-ldap-core-2.0.1.RELEASE.jar;"%REPO%"\spring-data-commons-1.8.4.RELEASE.jar;"%REPO%"\ldapbp-1.0.jar;"%REPO%"\spring-jdbc-4.0.7.RELEASE.jar;"%REPO%"\spring-tx-4.0.7.RELEASE.jar;"%REPO%"\spring-orm-4.0.7.RELEASE.jar;"%REPO%"\commons-lang-2.6.jar;"%REPO%"\spring-beans-4.0.7.RELEASE.jar;"%REPO%"\spring-core-4.0.7.RELEASE.jar;"%REPO%"\foxtrot-2.0.jar;"%REPO%"\digitalproject-startup-swing-1.0-SNAPSHOT.jar

set ENDORSED_DIR=
if NOT "%ENDORSED_DIR%" == "" set CLASSPATH="%BASEDIR%"\%ENDORSED_DIR%\*;%CLASSPATH%

if NOT "%CLASSPATH_PREFIX%" == "" set CLASSPATH=%CLASSPATH_PREFIX%;%CLASSPATH%

@REM Reaching here means variables are defined and arguments have been captured
:endInit

%JAVACMD% %JAVA_OPTS% -Djava.security.auth.login.config="%BASEDIR%"/conf/jaas.config -Dswing.defaultlaf=org.jvnet.substance.SubstanceLookAndFeel -Dsubstancelaf.watermark.tobleed -classpath %CLASSPATH% -Dapp.name="digitalproject" -Dapp.repo="%REPO%" -Dapp.home="%BASEDIR%" -Dbasedir="%BASEDIR%" org.jspresso.framework.application.launch.swing.SwingLauncher -applicationClass digitalproject.startup.swing.SwingApplicationStartup -splash classpath:digitalproject/images/icon.png %CMD_LINE_ARGS%
if %ERRORLEVEL% NEQ 0 goto error
goto end

:error
if "%OS%"=="Windows_NT" @endlocal
set ERROR_CODE=%ERRORLEVEL%

:end
@REM set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" goto endNT

@REM For old DOS remove the set variables from ENV - we assume they were not set
@REM before we started - at least we don't leave any baggage around
set CMD_LINE_ARGS=
goto postExec

:endNT
@REM If error code is set to 1 then the endlocal was done already in :error.
if %ERROR_CODE% EQU 0 @endlocal


:postExec

if "%FORCE_EXIT_ON_ERROR%" == "on" (
  if %ERROR_CODE% NEQ 0 exit %ERROR_CODE%
)

exit /B %ERROR_CODE%

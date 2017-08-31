## Book sharing application mobile frontend

#### How to Start Up Development Environment for Ubuntu Linux
###### Not an exhaustive, tested guide. Your own development environment may differ

1. Start Emulator (Genymotion)

   * cd /opt/genymobile/genymotion
   * ./genymotion

2. Start react packager

   * run 'react-native start' or 'npm start'

3. Use react-native command to run-android

   * cd /...howeveryougettoit.../BookSharingApp/
   * react-native run-android

#### Open Source React Native Apps to Follow and Learn From

"5 React Native Open Source Projects to Learn From" article here - https://blog.codeinfuse.com/5-open-source-react-native-projects-to-learn-from-fb7e5cfe29f2

#### Helpful Debugging Advice

##### Tip 1 - Resetting Cache

Run: npm start -- --reset-cache

After running npm start -- --reset-cache sometimes need to also re-run react-native run-android for it to rebuild properly

##### Tip 1 - How to do Logging in Local Dev

react-native log-ios

*OR* 

react-native log-android

More detailed debugging tips - https://medium.com/reactnativeacademy/debugging-react-native-applications-6bff3f28c375
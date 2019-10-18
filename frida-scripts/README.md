#### [Exercise] Bypassing Client-side defenses with Frida 

```bash
# push frida server on the emulator
adb push frida-server-12.7.5-android-x86 /data/local/tmp

# get interactive shell on emulator
adb shell

# navigate to tmp folder
cd /data/local/tmp

# assign execute permissions to frida server
chmod +x ./frida-server-12.7.5-android-x86

# execute frida server
/frida-server-12.7.5-android-x86

# Frida Task 1 - Root detection bypass with Frida 
# execute root_detection_bypass script for UncrackableLevel1 application
frida  -U –l root_detection_bypass.js –f owasp.mstg.uncrackable1 --no-pause

# Frida Task 2 - SSL pinning bypass with Frida
# execute universal SSL Pinning bypass script for twitter application
frida  -U –l ssl-pin.js –f com.twitter.android --no-pause
```


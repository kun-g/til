#!/usr/bin/env python3
from datetime import datetime
from subprocess import run
import os

TIL_BASE_PATH = os.path.expanduser(os.environ.get('TIL_BASE_PATH'))

now = datetime.now().astimezone() # TIL
nowtz = now.strftime('%Y-%m-%dT%H:%M:%S%z')

filename = f'{TIL_BASE_PATH}/{now.strftime("%Y%m%d%H%M")}.md'
template = '''---
title: "{title}"
date: {Date}
draft: true
tags: []
confidence: 0
changelog:
* {Date} - 创建
---
'''.format(**{ 
    'title': '', 
    'Date': nowtz
})

with open(filename, 'w') as f:
    f.write(template)
run(['nvim', filename])

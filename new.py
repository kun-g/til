#!/usr/bin/env python3
from datetime import datetime
from subprocess import run
import os, re

TIL_BASE_PATH = os.path.expanduser(os.environ.get('TIL_BASE_PATH'))

now = datetime.now().astimezone() # TIL
nowtz = now.strftime('%Y-%m-%dT%H:%M:%S%z')

template = '''---
title: "{title}"
date: {Date}
draft: true
tags: []
confidence: 0
changelog:
    - {Date} - 创建
---'''
def new_file():
    filename = f'{TIL_BASE_PATH}/{now.strftime("%Y%m%d%H%M")}.md'
    content = template.format(**{ 
        'title': '', 
        'Date': nowtz
    })

    with open(filename, 'w') as f:
        f.write(content)
    run(['nvim', filename])
    update_file(filename)

def update_file(filename):
    with open(filename, 'r') as f:
        lines = f.readlines()

    headers = {}
    for i in range(1, len(lines)):
        if lines[i].startswith('---'):
            break
        if lines[i].startswith('  '):
            continue
        k, v = re.match('([a-zA-z0-9]+):([^\n]*)', lines[i]).groups()
        headers[k] = (v.strip(), i)
    if int(headers['confidence'][0]) >= 5:
        _, i = headers['draft']
        lines[i] = 'draft: false\n'
    content = ''.join(lines)
    with open(filename, 'w') as f:
        f.write(content)

new_file()

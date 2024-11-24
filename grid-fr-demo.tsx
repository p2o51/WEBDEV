import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const GridDemo = () => {
  const [selectedDemo, setSelectedDemo] = useState('equal');

  const demos = {
    equal: {
      title: '1fr 1fr (等分)',
      style: {
        gridTemplateColumns: '1fr 1fr',
      },
      explanation: '两列平均分配空间'
    },
    oneTwo: {
      title: '1fr 2fr (1:2比例)',
      style: {
        gridTemplateColumns: '1fr 2fr',
      },
      explanation: '右列占据两倍空间'
    },
    fixed: {
      title: '100px 1fr 1fr',
      style: {
        gridTemplateColumns: '100px 1fr 1fr',
      },
      explanation: '第一列固定宽度，其余空间等分'
    },
    complex: {
      title: '1fr 2fr 3fr',
      style: {
        gridTemplateColumns: '1fr 2fr 3fr',
      },
      explanation: '按1:2:3比例分配空间'
    }
  };

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>CSS Grid fr 单位演示</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-2 flex-wrap">
          {Object.keys(demos).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedDemo(key)}
              className={`px-4 py-2 rounded ${
                selectedDemo === key 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {demos[key].title}
            </button>
          ))}
        </div>

        <div
          className="grid gap-4 h-32 border rounded-lg overflow-hidden"
          style={demos[selectedDemo].style}
        >
          {Array.from({ length: demos[selectedDemo].style.gridTemplateColumns.split(' ').length }).map((_, i) => (
            <div
              key={i}
              className="bg-blue-100 flex items-center justify-center p-4 text-blue-800"
            >
              区块 {i + 1}
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="font-medium">当前布局说明：</p>
          <p>{demos[selectedDemo].explanation}</p>
          <pre className="mt-2 p-2 bg-gray-800 text-white rounded">
            grid-template-columns: {demos[selectedDemo].style.gridTemplateColumns};
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};

export default GridDemo;

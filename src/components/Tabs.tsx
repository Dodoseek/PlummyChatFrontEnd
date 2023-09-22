'use client';
import { Tab } from '@headlessui/react'
import { TabObject } from '@/types/types';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Tabs = ({ name, list, ...props }: TabObject) => {

  return (
    <div {...props}>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {name.map((title, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {list.map((node, index) => {
            return (
              <Tab.Panel
                key={index}
                className={classNames(
                  'rounded-xl bg-white p-3 list-none',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                {node}
              </Tab.Panel>
            )
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}


import { mount } from '@vue/test-utils'
import { it, expect, describe } from 'vitest'
import Avatar from '@/components/Avatar.vue'
import Message from '@/components/Message.vue'

describe('Avatar', () => {
    test('com exists', () => {
        const vm = mount(Avatar)
        expect(vm.element.className).toContain('rounded-full')
        expect(vm.exists()).toBe(true)
    })
})

describe('message', () => {
    it('message', () => {
        const vm = mount(Message, {
            props: {
                msg: 'test msg',
            }
        })
        expect(vm.element.textContent).toBe('test msg')
        expect(vm.element.className).toContain('border-slate-300')
    })
})


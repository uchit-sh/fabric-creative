import React from 'react';

const shortcuts = [
    [
        { key: ['esc'], description: 'shortcut.escape' },
        { key: ['h'], description: 'shortcut.h' },
        { key: ['q'], description: 'shortcut.q' },
        { key: ['w'], description: 'shortcut.w' },
        { key: ['o'], description: 'shortcut.o' },
        { key: ['p'], description: 'shortcut.p' },
        { key: ['+'], description: 'shortcut.plus' },
        { key: ['-'], description: 'shortcut.minus' },
        { key: ['↑'], description: 'shortcut.arrow-up' },
        { key: ['↓'], description: 'shortcut.arrow-down' },
        { key: ['←'], description: 'shortcut.arrow-left' },
        { key: ['→'], description: 'shortcut.arrow-right' },
    ],
    [
        { key: ['delete | backspace'], description: 'shortcut.delete' },
        { key: ['ctrl | cmd', 'a'], description: 'shortcut.ctrl-a' },
        { key: ['ctrl | cmd', 'c'], description: 'shortcut.ctrl-c' },
        { key: ['ctrl | cmd', 'v'], description: 'shortcut.ctrl-v' },
        { key: ['ctrl | cmd', 'x'], description: 'shortcut.ctrl-x' },
        { key: ['ctrl | cmd', 'z'], description: 'shortcut.ctrl-z' },
        { key: ['ctrl | cmd', 'y'], description: 'shortcut.ctrl-y' },
        { key: ['alt', 'mouse left'], description: 'shortcut.alt-mouse-left' },
        { key: ['shift', 'mouse left'], description: 'shortcut.shfit-mouse-left' },
        { key: ['mouse left'], description: 'shortcut.mouse-left' },
        { key: ['mouse right'], description: 'shortcut.mouse-right' },
    ],
];

const ShortcutHelp: React.SFC = () => {
    return (
        <div className="rde-shortcut-help">
            {shortcuts.map((column, idx) => {
                return (
                    <ul className="rde-shortcut-help-list" key={idx}>
                        {column.map(shortcut => {
                            return (
                                <li key={shortcut.key.toString()} className="rde-shortcut-help-key">
                                    {shortcut.key.map(key => {
                                        return (
                                            <kbd key={key} className="rde-shortcut-help-key-unit">
                                                <span>{key}</span>
                                            </kbd>
                                        );
                                    })}
                                    <span className="rde-shortcut-help-key-def">
                                        {shortcut.description}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                );
            })}
        </div>
    );
};

export default ShortcutHelp;

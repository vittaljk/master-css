import { Component, OnInit } from "@angular/core";
import { Key } from "./drum-kit.model";

@Component({
    selector: "app-drum-kit",
    templateUrl: "./drum-kit.component.html",
    styleUrls: ["./drum-kit.component.scss"]
})

export class DrumKitComponent implements OnInit {
    keys: Key[];

    constructor() {
        this.keys = [
            new Key({ key: 65, sound: 'clap', alphabet: 'A' }),
            new Key({ key: 83, sound: 'hihat', alphabet: 'S' }),
            new Key({ key: 68, sound: 'kick', alphabet: 'D' }),
            new Key({ key: 70, sound: 'openhat', alphabet: 'F' }),
            new Key({ key: 71, sound: 'boom', alphabet: 'G' }),
            new Key({ key: 72, sound: 'ride', alphabet: 'H' }),
            new Key({ key: 74, sound: 'snare', alphabet: 'J' }),
            new Key({ key: 75, sound: 'tom', alphabet: 'K' }),
            new Key({ key: 76, sound: 'tink', alphabet: 'L' }),
        ]
    }

    ngOnInit() {
        window.addEventListener('keydown', this.playSound);
    }

    playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) return;
        key.classList.add('playing');
        audio['currentTime'] = 0;
        audio['play()'];
    }
}

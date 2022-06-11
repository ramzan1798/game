export default class UrlArgsBundle {
    args = {};

    prepareFrom = urlSearchParams => {
        for (let [k, v] of (new URLSearchParams(urlSearchParams)).entries()) {
            this.args[k] = v;
        }
        return this;
    }

    putExtra = (k, v) => {
        this.args[k] = v;
        return this;
    }

    hasExtra = k => {
        return this.args.hasOwnProperty(k);
    }

    getStringExtra = k => {
        return this.args[k];
    }

    hasActivityTag = () => {
        return this.hasExtra('activity');
    }

    hasFragmentTag = () => {
        return this.hasExtra('fragment');
    }

    getActivityTag = () => {
        return this.args['activity'];
    }

    getFragmentTag = () => {
        return this.args['fragment'];
    }

    setActivityTag = tag => {
        this.args['activity'] = tag
        return this;
    }

    setFragmentTag = tag => {
        this.args['fragment'] = tag
        return this;
    }

    getArgsAsUrlParams = () => {
        const params = new URLSearchParams(this.args).toString();
        return params !== ''  ? `/?${params}` : '/';
    }
}